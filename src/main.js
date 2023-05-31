import { createApp } from 'vue'
import store from './store/store';
import App from './App.vue'
import './assets/index-js/index'

createApp(App)
.use(store)
.mount('#app')
