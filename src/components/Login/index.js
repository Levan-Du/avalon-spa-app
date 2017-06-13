import avalon, { component } from 'avalon2';
import '../../assets/iconfont/iconfont.css';
import './index.css';

component('ms-login', {
    template: require('./index.html'),
    defaults: {
        onSubmit(e) {
            e.preventDefault();
            this.onSubmited();
        },
        onSubmited(e) {

        }
    }
});
