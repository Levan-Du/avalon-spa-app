import './index.css';
import avalon, { component } from 'avalon2';
import { parseCssModule } from '../../common/common';

// console.log(parseCssModule(styles, require('./index.html'));

component('ms-page1', {
    template: require('./index.html'),
    defaults: {}
})
