import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import './assets/global.css'

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount('#app')
