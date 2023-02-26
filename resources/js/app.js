import './bootstrap';
import '../sass/app.scss'
import Router from '@/router'
import store from '@/store'
import BootstrapVue3 from 'bootstrap-vue-3'
import i18n from './i18n'
import App from './App.vue'

import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import { createApp } from 'vue/dist/vue.esm-bundler';

const app = createApp(App)
app.use(Router)
app.use(store)
app.use(BootstrapVue3)
app.use(i18n)

app.mount('#app')
