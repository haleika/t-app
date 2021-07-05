import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './assets/css/reset.css'
import axios from './utils/http'

console.log('routes',router);
// app.use(ElementPlus)
console.log(axios);
const app = createApp(App);
app.config.globalProperties.$axios = axios 

axios.defaults.baseURL = 'http://localhost:5000';//后端开发环境地址
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头信息。
axios.defaults.headers.common['accessToken'] = 'FA4C308D5E8F6409E01344ADDAEB4C71';

app.config.devtools = true
app.use(store).use(router).use(ElementPlus).mount('#app')
// app.config.globalProperties.$axios = axios;
