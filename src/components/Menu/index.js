import avalon, { component } from 'avalon2';
import './index.css';

component('ms-menu', {
    template: require('./index.html'),
    defaults: {
        menus: [
            { id: 1, title: 'page1', path: '/page1', pid: 0 },
            { id: 2, title: 'page2', path: '/page2', pid: 0 }
        ]
    }
})
