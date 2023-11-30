import { createApp } from 'vue'
import intersection from "@/directives/VIntersection"
import App from './App.vue'
import store from './store'
import router from '@/router/router'

const app = createApp(App)

app.directive(intersection.name, intersection)

app.use(router).use(store).mount('#app')
