'use strict'

const Vue = require('vue')
    , Router = require('vue-router')
    , App = require('../../components/app/index.vue')
    , Home = require('../../components/home/index.vue')
	, About = require('../../components/about/index.vue')
	, Graduation = require('../../components/graduation/index.vue')
	, Portfolio = require('../../components/portfolio/index.vue')

class Application {
    constructor() {
        Vue.use(Router)
        const router = new Router({
			mode: 'history'
			, routes: [
                { path: '/', component: Home }
                , { path: '/about', component: About }
                , { path: '/graduation', component: Graduation }
                , { path: '/portfolio', component: Portfolio }
            ]
        })
        this.app = new Vue({
            router
            , render: r => r(App)
        }).$mount('#app')
    }
}

(() => new Application())()
