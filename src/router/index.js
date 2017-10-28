import Vue from 'vue'
import Router from 'vue-router'
import Entry from '@/components/entry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Entry
    }
  ]
})
