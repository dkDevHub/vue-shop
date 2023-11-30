import { createStore } from 'vuex'
import { goodsModule } from '@/store/goodsModule'

export default createStore({
	modules: {
		goods: goodsModule,
	},
})
