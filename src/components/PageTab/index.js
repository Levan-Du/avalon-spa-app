import avalon, { component } from 'avalon2';
import './index.css';
import createPage from '../../services/createPage';
import Router from '../../services/routes/router';
import { submenus } from '../../route.config';


component('ms-pagetab', {
    template: require('./index.html'),
    defaults: {
        name: 'pagetab',
        items: [submenus.find(el => el.id === 0)],
        onTabTitleClick(e) {
            var preIndex = this.items.findIndex(el => el.checked);
            var currIndex = this.items.findIndex(el => e.to === el.path);

            this.items[preIndex].checked = false;
            this.items[currIndex].checked = true;
        },
        getItemStyle(item) {
            if (item.id === 0) {
                return { padding: '0 1.5rem' }
            }
            return {};
        },
        removeItem(e) {
            e.preventDefault();
            e.stopPropagation();

            Router.removeHistory(e.to);
            var i = this.items.findIndex(el => el.path === e.to);
            this.items.removeAt(i);
            var path = '';
            if (i > 0) {
                path = this.items[i - 1].path;
            } else {
                path = '/home';
            }
            Router.redirect(path);
        },
        tabTitlesWidth: 0,
        tabTitlesBoxWidth: 0,
        tabTitleWrapperMarginLeft: 0,
        moveLeft(e) {
            if (this.tabTitlesBoxWidth < this.tabTitlesWidth) {
                var off = this.tabTitlesWidth - this.tabTitlesBoxWidth + this.tabTitleWrapperMarginLeft;
                if (off > 100) {
                    this.tabTitleWrapperMarginLeft += -100;
                } else {
                    this.tabTitleWrapperMarginLeft += -off;
                }
            }
        },
        moveRight(e) {
            if (this.tabTitleWrapperMarginLeft < 0) {
                if (this.tabTitleWrapperMarginLeft < -100) {
                    this.tabTitleWrapperMarginLeft += 100;
                } else {
                    this.tabTitleWrapperMarginLeft += -this.tabTitleWrapperMarginLeft;
                }
            }
        },
        calcTitlesWidth() {
            var width = 0,
                tabELes = $('#' + this.$id + ' .pagetab__title');

            tabELes.each((i, el) => width += $(el).width())

            this.tabTitlesWidth = width;
            this.tabTitlesBoxWidth = $('#' + this.$id + ' .pagetab__header .mid').width();
        },
        routeCallback() {
            var _this = this;
            var items = submenus.filter(el => Router.history.some(h => el.path === h.path));

            if (!items.length) {
                return;
            }

            items.forEach(el => {
                var query = Router.history.find(h => h.path === el.path).query;
                el.query = query;
                var iteIndex = _this.items.findIndex(ite => ite.id === el.id);
                if (iteIndex < 0) {
                    _this.items.push(el);
                } else {
                    _this.items[iteIndex].query = el.query;
                }
            })

            var currItem = submenus.find(el => el.path === Router.currentUrl);
            if (!currItem) {
                return;
            }

            var currId = currItem.id,
                currIndex = _this.items.findIndex(el => el.id === currId),
                preIndex = _this.items.findIndex(el => el.checked === true);

            if (preIndex >= 0) {
                _this.items[preIndex].checked = false;
            }
            _this.items[currIndex].checked = true;
        },
        onInit(e) {
            var _this = this;

            Router.describe(this.routeCallback.bind(this));

            this.routeCallback();
        },
        onReady(e) {
            this.calcTitlesWidth();
        },
        onViewChange(e) {
            this.calcTitlesWidth();
        }
    }
})
