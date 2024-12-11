import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import VueTheMask from 'vue-the-mask';

import './css/app.css';

const routes = [
    { 
        path: '/', 
        name: 'home', 
        component: () => import('./components/pages/HomeApp.vue'),
    },
    { 
        path: '/users', 
        name: 'users', 
        component: () => import('./components/pages/UsersApp.vue') 
    },
    { 
        path: '/user/:id', 
        name: 'user', 
        component: () => import('./components/pages/UserApp.vue') 
    },
    { 
        path: '/new-user', 
        name: 'new-user', 
        component: () => import('./components/pages/CreateUserApp.vue') 
    },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes, 
    linkActiveClass: 'link-active',
})

const app = createApp(App)

app.config.globalProperties.urlBackend = 'https://desafio.test'

app.use(VueTheMask)
app.use(router)
app.mount('#app')


