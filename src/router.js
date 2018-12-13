import Vue from 'vue';
import Router from 'vue-router';
import Login from './pages/Login.vue'
import NotFound from './pages/404.vue'
import Home from './pages/Home.vue'
import Main from './pages/Main.vue'
import Table from './pages/nav1/Table.vue'
import Form from './pages/nav1/Form.vue'
import user from './pages/nav1/user.vue'
import Page4 from './pages/nav2/Page4.vue'
import Page5 from './pages/nav2/Page5.vue'
import Page6 from './pages/nav3/Page6.vue'

Vue.use(Router)

let routes = [{
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '导航一',
        children: [{
                path: '/main',
                component: Main,
                name: '主页',
                hidden: true
            },
            {
                path: '/table',
                component: Table,
                name: 'Table'
            },
            {
                path: '/form',
                component: Form,
                name: 'Form'
            },
            {
                path: '/user',
                component: user,
                name: '列表'
            },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        children: [{
                path: '/page4',
                component: Page4,
                name: '页面4'
            },
            {
                path: '/page5',
                component: Page5,
                name: '页面5'
            }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        leaf: true, //只有一个节点
        children: [{
            path: '/page6',
            component: Page6,
            name: '导航三'
        }]
    },
    {
        path: '*',
        hidden: true,
        redirect: {
            path: '/404'
        }
    }
];

const router = new Router({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    console.log("router path", to.path)
    if (to.path == '/login') {
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (!user && to.path != '/login') {
        next({
            path: '/login'
        })
    } else {
        next()
    }
})

export default router