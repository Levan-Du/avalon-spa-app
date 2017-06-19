import createPage from './createPage';

var pages = [];

[1, 2, 3].forEach(i => {
    pages.push(createPage(i, 0, 'page' + i));
});


pages = pages.concat([
    createPage(10000, 10000, 'home'),
    createPage(101, 1, 'page101'),
    createPage(201, 2, 'page201'),
    createPage(301, 3, 'page301')
]);


export var menus = pages.filter(el => el.pid === 0);
export var submenus = pages.filter(el => el.pid !== 0);

export default { pages, menus, submenus };
