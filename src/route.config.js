import createPage from './services/createPage';

var pages = [];

[1, 2, 3].forEach(i => {
    pages.push(createPage(i, 0, 'page' + i, 'page' + i));
});


pages = pages.concat([
    createPage(0, 1, 'home', '首页'),
    createPage(101, 1, 'page101', 'page101'),
    createPage(102, 1, 'page102', 'page102'),
    createPage(103, 1, 'page103', 'page103'),
    createPage(201, 2, 'page201', 'page201'),
    createPage(202, 2, 'page202', 'page202'),
    createPage(301, 3, 'page301', 'page301'),
    createPage(302, 3, 'page302', 'page302'),
    createPage(303, 3, 'page303', 'page303'),
    createPage(304, 3, 'page304', 'page304')
]);


export var menus = pages.filter(el => el.pid === 0);
export var submenus = pages.filter(el => el.pid !== 0);

export default { pages, menus, submenus };
