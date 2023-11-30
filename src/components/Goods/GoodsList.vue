<template>
    <div class="goods_list">
        <span v-if="goodsList.length == 0">Goods list is Empty</span>
        <div v-else v-for="goods in goodsList">
            <goods @click="$router.push(`/goods/${goods.id}`)" :goods="goods"/>
        </div>
    </div>
</template>

<script>
    import Goods from '@/components/Goods/Goods.vue';
    export default {
        props: {
            goodsList:{
                type: Array,
                required: true
            }
        },
        components: {
            Goods,
        }
    }
    
</script>

<style lang="scss" scoped>
.goods_list{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 300px;
    div{
        display: flex;
        margin: 20px;
        border-radius: 12px;
        background-color: #202020;
        &:hover{
            transform: scale(1.05);
        }
    }
}
</style>