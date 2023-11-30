<template>
    <div class="content">
        <message v-if="isLoading">Loading...</message>
        <message v-if="isError">{{ error }}</message>
        <goods-list v-else :goodsList="searchedGoods" />
        <div v-if="goods.length !== 0" v-intersection="fetchGoods"  class="observer"></div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Message from '@/components/UI/Message.vue';
import GoodsList from '@/components/Goods/GoodsList.vue';

export default {
    setup () {
        const store = useStore()
        
        return {
            fetchGoods: () => store.dispatch('goods/fetchGoods'),
            isLoading:  computed(() => store.state.goods.isLoading),
            isError:  computed(() => store.state.goods.isError),
            error:  computed(() => store.state.goods.error),
            goods: computed(() => store.state.goods.goods),
            searchedGoods: computed(() => store.getters['goods/searchedGoods'])
        }
    },
    mounted () {
        this.fetchGoods()
    },
    components: {
        Message,
        GoodsList
    },
}
</script>

<style lang="scss" scoped>
.content{
    background-color: #2c2c2c;
    width: 90vw;
    padding: 20px;
}
</style>