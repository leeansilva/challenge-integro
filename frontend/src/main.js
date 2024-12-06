import { createApp } from 'vue'
import { Dialog, Notify, Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Quasar, {
    plugins: {
        Dialog,
        Notify
    },
  });

  app.use(router)
  app.mount('#app')
