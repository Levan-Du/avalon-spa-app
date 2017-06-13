import avalon, { component } from 'avalon2';
import './index.css';

component('ms-tab', {
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
            console.log(item.$model);
            var index = this.items.$model.findIndex(el => el.id === item.id);
            console.log(index);
            this.items.removeAt(index);
        }
    }
})
