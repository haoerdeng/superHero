import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.requestUrl = "https://easy-mock.com/mock/5d253a9c078a9917d35e48d7/example" //开发环境

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
