import avalon, { component } from 'avalon2';
import './index.css';

component('ms-pagetab', {
    template: require('./index.html'),
    defaults: {
        name: 'pagetab',
        items: [

        ],
        onTabTitleClick(e, item) {
            this.items.find(el => el.checked).checked = false;
            item.checked = true;
        },
        removeItem(e, item) {

        },
        onReady() {
            console.log(this.removeItem);
        }
    }
})
