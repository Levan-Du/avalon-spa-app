import avalon, { component } from 'avalon2';
import './index.css';

component('ms-tab', {
    template: require('./index.html'),
    defaults: {
        name: 'pagetab',
        pages: [
            { title: 'home', tmpl: '<ms-homepage slot="page" />', checked: true },
            { title: 'page1', tmpl: '<ms-page1 slot="page" />', checked: false },
            { title: 'page2', tmpl: '<ms-page2 slot="page" />', checked: false }
        ],
        onTabTitleClick(checked) {
            this.pages.forEach(el => el.checked = false);            
        }
    }
})
