import avalon, { component } from 'avalon2';
import './index.css';

component('ms-menu', {
    template: require('./index.html'),
    defaults: {
        menus: [{ id: 1, title: '菜单1', pid: 0 },
            { id: 2, title: '菜单2', pid: 0 },
            { id: 3, title: '菜单3', pid: 0 },
            { id: 4, title: '菜单4', pid: 0 },
            { id: 5, title: '菜单5', pid: 0 },
            { id: 6, title: '菜单6', pid: 0 },
            { id: 7, title: '菜单7', pid: 0 },
            { id: 8, title: '菜单8', pid: 0 },
            { id: 9, title: '菜单9', pid: 0 },
            { id: 10, title: '菜单10', pid: 0 }
        ]
    }
})
