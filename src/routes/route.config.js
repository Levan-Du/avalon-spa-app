import { submenus } from './pages';
import Router from './router';

(function(submenus) {
    var app = avalon.vmodels['app'];

    submenus.forEach((el, i) => {
        Router.route(el.path, () => {
            app.routeHandler(el, i);
        });
    });
})(submenus);

Router.init();
