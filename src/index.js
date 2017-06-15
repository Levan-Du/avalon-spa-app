import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './common/common.css';
import './index.css';
import './common/hack';
import './components';
import './pages';
import avalon, { define } from 'avalon2';
import './routes/router';
import pages from './routes/pages';


var menus = pages.filter(el => el.pid === 0),
    submenus = pages.filter(el => el.pid !== 0);

define({
    $id: 'app',
    tabItems: [{
        id: 10000,
        name: 'home',
        title: '首页',
        path: '/home',
        tmpl: '<ms-homepage slot="page" />',
        checked: true,
        pid: 10000
    }],
    routeHandler(tabitem, index) {
        // console.log(this.tabItems,tabitem,index);

        var preindex = this.tabItems.findIndex(el => el.checked);
        if (preindex >= 0) {
            this.tabItems[preindex].checked = false;
        }

        var currIndex = this.tabItems.findIndex(el => el.id === tabitem.id);
        if (currIndex < 0) {
            tabitem.checked = true;
            this.tabItems.push(tabitem);
        } else {
            if (this.tabItems[currIndex]) {
                this.tabItems[currIndex].checked = true;
            }
        }
    },
    removeTabItem(e, item) {
        e.preventDefault();

        var i = this.tabItems.findIndex(el => el.id === item.id);
        this.tabItems.removeAt(i);
        var path = this.tabItems[i-1].path;
        window.Router.redirect(path);
    },
    hashclick(e) {
        location.hash = '/home';
    }
});

define({
    $id: 'vm_sidebar',
    menus,
    submenus
});

(function(submenus) {
    var app = avalon.vmodels['app'];

    submenus.forEach((el, i) => {
        window.Router.route(el.path, () => {
            app.routeHandler(el, i);
        });
    });
})(submenus);

window.Router.init();
