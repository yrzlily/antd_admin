import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import store from './store/index'
import App from './App.vue'
import router from './util/router'
import http from './util/http'
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)

//全局属性
app.config.globalProperties.$store = store
app.config.globalProperties.$router = router
app.config.globalProperties.$http = http

//挂载
app.use(store)
app.use(router)
app.use(Antd);

//自定义指令
app.directive('promise', {
    mounted(el, binding, vnode) {
        console.log(binding.value)
        if(false){
            el.parentNode.removeChild(el)
        }
    }
})

app.mount('#app')