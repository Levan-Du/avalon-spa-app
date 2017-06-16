import avalon, { define } from 'avalon2';
import Router from '../routes/router';


define({
    $id: 'app',
    tabItems: [],
    routeHandler(tabitem, index) {
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
        var path = this.tabItems[i - 1].path;
        Router.redirect(path);
    }
});
