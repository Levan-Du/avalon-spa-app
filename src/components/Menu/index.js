import avalon, { component } from 'avalon2';
import './index.css';

component('ms-menu', {
    template: require('./index.html'),
    defaults: {
        menus: [],
        submenus: [],
        getSubmenus(id) {
            var sms = this.submenus.filter(el => el.pid === id);
            return sms;
        },
        menuItemClick(el, i) {
            var preIndex = this.menus.findIndex(el => el.checked);
            this.menus[preIndex].checked = false;
            this.menus[i].checked = true;
        },
        subMenuItemClick(el) {

        }
    }
})
