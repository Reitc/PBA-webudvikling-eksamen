import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router'; // Import the router
import './assets/style.css';
import clickOutside from './directives/clickOutside';

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);
app.use(createPinia()); // Use Pinia for state management
app.use(router); // Use the router
app.directive('click-outside', clickOutside);

// Configure Toastification plugin
app.use(Toast, {
  position: "top-right",
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
});

app.mount('#app');
