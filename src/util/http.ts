import axios from 'axios';
console.log(import.meta.env.VITE_APP_BASE_URL)
const http = axios.create({
    baseURL: <any>import.meta.env.VITE_APP_BASE_URL, //接口统一域名
    timeout: 6000, //设置超时
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;',
    }
});

export default http;
