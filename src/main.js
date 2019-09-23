import Vue from 'vue'
import App from './App.vue'
import css from './assets/css/mycss.css'

Vue.config.productionTip = false

new Vue({
    render: h => h(App, css),
}).$mount('#app')
