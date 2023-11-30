<template>
    <div class="goods_page">
        <img :src="goods.thumbnail" alt=".">
        <div>{{ goods }}</div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

    export default {
        data() {
            return {
                goods: false
            }
        },
        setup() {
            const route = useRoute();
            
            return{
                id: computed(() => route.params.id),
            }
        },
        methods: {
            async fetchOneGoods() {
                this.goods = await fetch(
					`https://dummyjson.com/products/${this.id}`
				).then(response => response.json());
            }
        },
        mounted() {
            this.fetchOneGoods() 
        }
    }
</script>

<style lang="scss" scoped>
.goods_page{
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    img{
        margin-right: 20px;
    }
}
</style>