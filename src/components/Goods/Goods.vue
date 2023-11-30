<template>
    <div class="goods">
        <div class="img" :style="{backgroundImage: `url('${goods.thumbnail}')` }"></div>
        <div class="info">
            <span class="title">{{ goods.title }}</span>
            <span class="rating">{{ goods.rating }}/5</span>
            <span class="price">{{ goods.price }}$</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            goods: {
                type: Object,
                required: true
            },
        },
    }
</script>

<style lang="scss" scoped>
.goods{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    .img{
        flex: 1;
        background-size: cover;
        background-position: 50%;
        border-radius: 12px;
    }

    .info{
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        padding: 10px;
    }
    
}
</style>