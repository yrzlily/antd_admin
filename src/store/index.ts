import { createStore } from 'vuex'
import service from './module/service';
// 创建一个新的 store 实例
const store = createStore({
    modules:{
        service:service
    }
})

export default store;