import { createApp } from 'vue'
import store from './store/store';
import App from './App.vue';
import './assets/index-js/index';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faDownload);

createApp(App)
.use(store)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
