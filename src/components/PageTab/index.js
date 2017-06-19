import avalon, { component } from 'avalon2';
import './index.css';
import createPage from '../../routes/createPage';
import Router from '../../routes/router';
import { submenus } from '../../routes/pages';


component('ms-pagetab', {
    template: require('./index.html'),
    defaults: {
        name: 'pagetab',
        items: [],
        onTabTitleClick(e, item) {
            var preIndex = this.items.findIndex(el => el.checked);
            var currIndex = this.items.findIndex(el => item.id === el.id);
            console.log(preIndex, currIndex);
            this.items[preIndex].checked = false;
            this.items[currIndex].checked = true;
        },
        removeItem(e, item) {
            e.preventDefault();

            var i = this.tabItems.findIndex(el => el.id === item.id);
            this.tabItems.removeAt(i);
            var path = this.tabItems[i - 1].path;
            Router.redirect(path);
        },
        tabTitlesWidth: 0,
        tabTitlesBoxWidth: 0,
        tabTitleWrapperMarginLeft: 0,
        moveLeft(e) {
            if (this.tabTitlesBoxWidth < this.tabTitlesWidth) {
                var off = this.tabTitlesWidth - this.tabTitlesBoxWidth + this.tabTitleWrapperMarginLeft;
                console.log(off);
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
                tabELes = $('#' + this.$id + ' .tab__title');
            for (var i in this.items) {
                width += $(tabELes[i]).outerWidth();
            };
            this.tabTitlesWidth = width;
            this.tabTitlesBoxWidth = $('#' + this.$id + ' .tab__header .mid').width();
        },
        onInit(e) {
            // console.log(this.items.$model);
        },
        onReady(e) {
            this.calcTitlesWidth();
        },
        onViewChange(e) {
            this.calcTitlesWidth();
        }
    }
})
