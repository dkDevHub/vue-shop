import Main from '@/pages/Main.vue'
import { createRouter, createWebHistory } from 'vue-router'
import GoodsPage from '@/pages/GoodsPage.vue'


const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/goods/:id',
		component: GoodsPage,
	},
]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL),
})

export default router
