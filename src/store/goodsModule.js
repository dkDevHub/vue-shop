export const goodsModule = {
	state: () => ({
		goods: [],
		isLoading: false,
		isError: false,
		error: '',
		searchQuery: '',
		page: 0,
		limit: 9,
		totalPages: 0,
	}),
	getters: {
		searchedGoods(state) {
			return [...state.goods].filter(goods =>
				goods.title.toLowerCase().includes(state.searchQuery.toLowerCase())
			)
		},
	},
	mutations: {
		setGoods(state, goods) {
			state.goods = [...state.goods, ...goods]
		},
		setLoading(state, bool) {
			state.isLoading = bool
		},
		setPage(state, page) {
			state.page = page
		},
		setTotalPages(state, totalPages) {
			state.totalPages = totalPages
		},
		setSearchQuery(state, searchQuery) {
			state.searchQuery = searchQuery
		},
		setIsError(state, isError) {
			state.isError = isError
		},
		setError(state, error) {
			state.error = error
		},
	},
	actions: {
		async fetchGoods({ state, commit }) {
			if (state.page > state.totalPages) return;
			try {
				commit('setLoading', true)
				const skip = state.limit * state.page
				const response = await fetch(
					`https://dummyjson.com/products?limit=${state.limit}&skip=${skip}`
				).then(response => response.json());
				
				//console.log(response)
				commit('setLoading', false)
				commit('setGoods', response.products)
				commit('setPage', state.page + 1)
				commit('setTotalPages', Math.ceil(response.total / state.limit))
			} catch (e) {
				commit('setIsError', true)
				commit('setError', e)
				console.log(e)
			} finally {
				commit('setLoading', false)
			}
		},
	},
	namespaced: true,
}
