'use strict'

const Vue = require('vue')
    , Router = require('vue-router')
    , App = require('../../components/app/index.vue')
    , Home = require('../../components/home/index.vue')
	, About = require('../../components/about/index.vue')

class Application {
    constructor() {
        Vue.use(Router)
        const router = new Router({
            routes: [
                { path: '/', component: Home }
                , { path: '/about', component: About }
            ]
        })
        this.app = new Vue({
            router
            , render: r => r(App)
        }).$mount('#app')
    }
}

(() => new Application())()
