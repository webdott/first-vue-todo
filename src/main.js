import { createApp } from 'vue';
import App from './App.vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { CoCheckAlt, CoPlus, IoCloseCircleOutline } from 'oh-vue-icons/icons';
import '@/index.css';

addIcons(CoCheckAlt, CoPlus, IoCloseCircleOutline);

const app = createApp(App);
app.component('v-icon', OhVueIcon);
app.mount('#app');
