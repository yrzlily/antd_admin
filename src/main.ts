import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import store from './store/index'
import App from './App.vue'
import router from './util/router'
import http from './util/http'
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)
app.config.globalProperties.$store = store
app.config.globalProperties.$router = router
app.config.globalProperties.$http = http
app.use(store)
app.use(router)
app.use(Antd);
app.mount('#app')