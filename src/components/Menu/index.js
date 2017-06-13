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
        menuItemClick(el) {
            var pre = this.menus.find(el => el.checked);
            pre.checked = false;
            el.checked = true;
        },
        subMenuItemClick(el) {

        }
    }
})
