import avalon, { component } from 'avalon2';
import '../../assets/iconfont/iconfont.css';
import './index.css';

component('ms-logininfo', {
    template: require('./index.html'),
    defaults: {
        account: {}
    }
});
