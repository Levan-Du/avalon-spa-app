class Router {
    constructor() {
        this.routes = {};
        this.currentUrl = '';
        this.query = '';
        this.routerComponent = {};
        this.history = [];
        this.listeners = [];
    }

    route(path, callback) {
        this.routes[path] = callback || function() {};
    }

    refresh() {
        var _this = this;

        var url = location.hash.slice(1) || '/';
        var index = url.indexOf('?');
        index = index < 0 ? url.length : index;
        _this.currentUrl = url.substr(0, index);
        _this.query = url.substr(index + 1, url.length) || '';

        var cb = _this.routes[_this.currentUrl];
        cb && cb();

        if (!_this.history.some(h => _this.currentUrl === h.path)) {
            _this.history.push({ path: _this.currentUrl, query: _this.query });
        } else {
            var i = _this.history.findIndex(el => el.path === _this.currentUrl);
            _this.history[i].query = _this.query;
        }

        this.listeners.forEach(l => l())
    }

    clearHistory() {
        this.history = [];
        this.listeners = [];
    }

    removeHistory(path) {
        this.history = this.history.filter(el => el.path !== path);
    }

    describe(listener) {
        this.listeners.push(listener);
    }

    redirect(path) {
        location.hash = path;
    }

    init() {
        window.addEventListener('load', this.refresh.bind(this), false);
        window.addEventListener('hashchange', this.refresh.bind(this), false);
    }

    getQuery() {
        if (!this.query) {
            return {}
        };

        var result = this.query.match(new RegExp('[\?\&]?[^\?\&]+=[^\?\&]+', 'g'));
        if (!result) return {};

        var oo = {};
        for (var i in result) {
            var ss = result[i].toString().split('=');
            oo[ss[0].replace('&', '')] = ss[1];
        }
        return oo;
    }
}


var router = new Router();
export default router;

router.init();
