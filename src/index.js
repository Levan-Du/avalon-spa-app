import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './common/common.css';
import './index.css';
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
    routeHandler(tabitem) {
        var item = this.tabItems.find(el => el.checked);
        if (item) item.checked = false;

        var currItem = this.tabItems.find(el => el.id === tabitem.id);
        if (!currItem) {
            tabitem.checked = true;
            this.tabItems.push(tabitem);
        } else {
            currItem.checked = true;
        }
    },
    removeTabItem(e, item) {
        var i = this.tabItems.findIndex(el => el.id === item.id);
        console.log('before remove');
        this.tabItems.removeAt(i);
        console.log('after remove');
    }
});

define({
    $id: 'vm_sidebar',
    menus,
    submenus
});

(function(submenus) {
    var app = avalon.vmodels['app'];

    submenus.forEach(el => {
        window.Router.route(el.path, () => {
            app.routeHandler(el);
        });
    });
})(submenus);

window.Router.init();
