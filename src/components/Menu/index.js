import avalon, { component } from 'avalon2';
import './index.css';
import { menus, submenus } from '../../routes/pages';


var submenuArr = {};
menus.forEach((m) => {
    submenuArr[m.id] = submenus.filter(s => s.pid === m.id);
});
var selectedSubMenuItem = submenus[0];

component('ms-menu', {
    template: require('./index.html'),
    defaults: {
        menus,
        submenuArr,
        selectedSubMenuItem,
        menuItemClick(e, item) {
            var preIndex = this.menus.findIndex(el => el.checked);
            var currIndex = this.menus.findIndex(el => item.id === el.id);
            if (preIndex >= 0) {
                this.menus[preIndex].checked = false;
            }
            this.menus[currIndex].checked = true;
        },
        subMenuItemClick(e, item) {
            var preIndex = this.submenuArr[item.pid].findIndex(el => el.checked);
            var currIndex = this.submenuArr[item.pid].findIndex(el => item.id === el.id);

            if (preIndex >= 0) {
                this.submenuArr[item.pid][preIndex].checked = false;
            }
            this.submenuArr[item.pid][currIndex].checked = true;
        },
        onReady(e) {}
    }
})
