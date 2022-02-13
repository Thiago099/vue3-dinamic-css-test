import { createApp } from 'vue'
import App from './App'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'

const app = createApp(App)

import global from './global/main'
app.mixin(global)

app.use(BootstrapVue3)
    .use(router)
    .mount('#app')