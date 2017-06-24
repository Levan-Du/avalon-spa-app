import avalon, { component } from 'avalon2';
import './index.css';
import { menus, submenus } from '../../../route.config';


component('ms-page', {
    template: require('./index.html'),
    defaults: {
    	pages:submenus
    }
});
