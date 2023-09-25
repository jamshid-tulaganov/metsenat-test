import { createApp } from 'vue'
import App from './App.vue'
import "./style/main.css";
import router from "./router/index"
import { createPinia } from 'pinia'

// store
const pinia = createPinia();

// global components
import AppInput from "./components/base/AppInput.vue";
import AppButton from './components/base/AppButton.vue';

createApp(App)
    .use(pinia)
    .use(router)
    .component("AppInput", AppInput)
    .component("AppButton", AppButton)
    .mount('#app')
