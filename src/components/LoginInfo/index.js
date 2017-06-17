import avalon, { component } from 'avalon2';
import '../../assets/iconfont/iconfont.css';
import './index.css';

component('ms-logininfo', {
    template: require('./index.html'),
    defaults: {
        id: 0,
        name: '怡红公子',
        role: '管理员',
        avator: require('./boy.png')
    }
});
