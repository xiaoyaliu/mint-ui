import Vue from 'vue'
import Router from 'vue-router'
import Entry from '@/components/entry'
import Toast from '@/components/toast/Toast'
import Indicator from '@/components/indicator/Indicator'
import Loadmore from '@/components/loadmore/loadmore'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Entry
    },
    {
      path: '/Toast',
      component: Toast
    },
    {
      path:'/Indicator',
      component: Indicator
    },
    {
      path:'/Loadmore',
      component: Loadmore
    }
  ]
})
