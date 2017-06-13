var pages = [{
    id: 1,
    name: 'basic',
    title: '基本资料',
    path: '/',
    tmpl: '',
    checked: true,
    pid: 0
},{
    id: 2,
    name: 'basic',
    title: '其他',
    path: '/',
    tmpl: '',
    checked: true,
    pid: 0
},{
    id: 100,
    name: 'page1',
    title: 'page1',
    path: '/page1',
    tmpl: '<ms-page1 slot="page" />',
    checked: false,
    pid: 1
}, {
    id: 101,
    name: 'page2',
    title: 'page2',
    path: '/page2',
    tmpl: '<ms-page2 slot="page" />',
    checked: false,
    pid: 1
}, {
    id: 200,
    name: 'page3',
    title: 'page3',
    path: '/page3',
    tmpl: '<ms-page3 slot="page" />',
    checked: false,
    pid: 2
}, {
    id: 201,
    name: 'page4',
    title: 'page4',
    path: '/page4',
    tmpl: '<ms-page4 slot="page" />',
    checked: false,
    pid: 2
}]

export default pages;
