import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import router from './router'
import '@/styles/index.scss' // global css

//import vuex
import store from './store'
app.use(store)
//import 自定义插件
import plugins from '@/plugins'
app.use(plugins)
//import element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import EN from 'element-plus/es/locale/lang/en'
app.use(ElementPlus, { size: 'mini', locale: EN })


// import element icon
import * as ElIconModules from '@element-plus/icons'
import { transElIconName } from './utils/icons'
for (const iconName in ElIconModules) {
  app.component(transElIconName(iconName), ElIconModules[iconName])
}

//import axios req
import axiosReq from '@/utils/baseRequest'
app.config.globalProperties.$axiosReq = axiosReq

//svg-icon
//import svg-icon doc in  https://github.com/anncwb/vite-plugin-svg-icons/blob/main/README.zh_CN.md
import 'virtual:svg-icons-register'
import svgIcon from '@/icons/SvgIcon.vue'
app.component('svg-icon', svgIcon)

//global mount moment-mini
import $momentMini from 'moment-mini'
app.config.globalProperties.$momentMini = $momentMini

//import global directive
import directive from '@/directive'
directive(app)

//import router  intercept
import './permission'

//error log  collection
import errorLog from '@/hooks/errorLogHook'
errorLog(app)

app.use(router).mount('#app')
