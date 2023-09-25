import { createApp } from 'vue'
import App from './App.vue'
import "./style/main.css";
// router
import router from "./router/index"

// global components
import AppInput from "./components/ui/AppInput.vue";
import AppButton from './components/ui/AppButton.vue';

createApp(App)
    .use(router)
    .component("AppInput", AppInput)
    .component("AppButton", AppButton)
    .mount('#app')
