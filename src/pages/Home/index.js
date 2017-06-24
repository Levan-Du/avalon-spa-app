import './index.css';
import avalon, { component } from 'avalon2';
import { parseCssModule } from '../../services/parseCssModule';

// console.log(parseCssModule(styles, require('./index.html'));

component('ms-home', {
    template: require('./index.html'),
    defaults: {}
})
