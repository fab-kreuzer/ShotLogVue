import { createApp } from 'vue'
import './style.css'
import 'primevue/resources/themes/lara-dark-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import PrimeVue from "primevue/config";
import App from "./App.vue";
import Router from './router'
import Button from "primevue/button";
import Dialog from "primevue/dialog";

const app = createApp(App)

app.use(PrimeVue)
app.use(Router)

app.component('Button', Button)
app.component('Dialog', Dialog)
app.mount('#app')
