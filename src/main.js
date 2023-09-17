import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import app from "@/App.vue";
import '@/assets/font/font.css'
import '@/assets/css/mouse.css'
import axios from "axios";
import store from './store';
import Antd from 'ant-design-vue';
import antdcss from 'antd/dist/reset.css'
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    const role = localStorage.getItem("role");
    console.log(role)
    if (role === '-100' && to.path !== '/login') {
        next('/login');
    } else {
        if(role && to.path === '/login'){
            if (role === '0'){
            }else {
            }
        }
        if (role && to.path.includes('hidden')){
            if (role !== '0'){
                next('/login')
            }
        }
        next();

    }
})

createApp(App).use(router,store,Antd).mount('#app')
// app.config.globalProperties.initAudio = initAudio    // main.ts/js 文件中


app.config.globalProperties.$http=axios
