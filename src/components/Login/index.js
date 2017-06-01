import avalon, { component } from 'avalon2';
import '../../assets/iconfont/iconfont.css';
import '../../common/common.css';
import './index.css';

component('ms-login', {
    template: require('./index.html'),
    defaults: {
        name: 'Levan',
        onSubmit(e) {
            e.preventDefault();
            this.onSubmited();
        },
        onSubmited(e) {

        }
    }
});
