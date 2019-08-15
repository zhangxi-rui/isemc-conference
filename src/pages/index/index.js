// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './index.vue'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './index.vue'
import router from './router'
import ElementUI from 'element-ui'
import "../../components/css/layout.css"
import "../../components/css/base.css"
import "../../components/css/common.css"
import "../../components/css/font.css"
// import "../../assets/font/font.css"
import 'element-ui/lib/theme-chalk/index.css'
import VueCookies from 'vue-cookies'
import global1 from '../../components/common/Global'
import 'babel-polyfill'
Vue.prototype.GLOBAL = global1//挂载到Vue实例上面
Vue.prototype.getCookie=function(cname){
	var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) 
        {
            var c = ca[i].trim();
            if (c.indexOf(name)==0) return c.substring(name.length,c.length);
        }
    return null;
}
Vue.use(VueCookies)


Vue.use(ElementUI)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
