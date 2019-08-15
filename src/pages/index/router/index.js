// import Vue from 'vue'
// import Router from 'vue-router'
// import Hello from '@/components/page/hotal/hotal'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     }
//   ]
// })

import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)


export default new Router({
  routes: [
    {
            path: '/',
            redirect: '/Home'
        },
        {
            path: '/',
            component: resolve => require(['@/components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/Home',
                    component: resolve => require(['@/components/page/Home/Home.vue'], resolve),
                    meta: { title: 'Home' }
                },
                {
                    path: '/KeynoteSpeech',
                    component: resolve => require(['@/components/page/KeynoteSpeech/KeynoteSpeech.vue'], resolve),
                    meta: { title: 'Keynote Speech' }
                },
                {
                    path: '/committee',
                    component: resolve => require(['@/components/page/committee/committee.vue'], resolve),
                    meta: { title: 'committee' }
                },
                 {
                    
                    path: '/schedule',
                    component: resolve => require(['@/components/page/schedule/schedule.vue'], resolve),
                    meta: { title: 'schedule' }
                },
                {
                    
                    path: '/CallforPaper',
                    component: resolve => require(['@/components/page/CallforPaper/CallforPaper.vue'], resolve),
                    meta: { title: 'Call for Paper' }
                },
                
                {
                    
                    path: '/register',
                    component: resolve => require(['@/components/page/register/register.vue'], resolve),
                    meta: { title: 'register' }
                },
                {
                    
                    path: '/Travel',
                    component: resolve => require(['@/components/page/Travel/Travel.vue'], resolve),
                    meta: { title: 'Travel' }
                },
                {
                    
                    path: '/PastConferences',
                    component: resolve => require(['@/components/page/PastConferences/PastConferences.vue'], resolve),
                    meta: { title: 'Past Conferences' }
                }


               
                
            ]
        }
  ]
})
