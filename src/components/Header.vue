<template>
    <header class="header">
        <div class="logo"><span>Its</span>Logo</div>
        <div class="search">
            <input v-bind:value="searchQuery" @input="setSearchQuery($event.target.value)" type="text" id="search" placeholder="Search">
        </div>
        <div class="auth">
            Login
        </div>
    </header>
</template>

<script>
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    export default {
        setup () {
        const store = useStore()
        
        return {
            searchQuery: computed(() => store.state.goods.searchQuery),
            setSearchQuery: (value) => store.commit("goods/setSearchQuery", value)
        }
    },
    }
</script>

<style lang="scss" scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: tomato;
    border-bottom: 4px solid crimson;

    padding: 10px 20px;
    margin-bottom: 20px;
    width: 100vw;

    .logo{
        font-size: 24px;
        span{
            color: brown;
        }
    }

    .search{
        display: flex;
        align-items: center;
        flex: 1;
        margin: 0 100px;
        #search{
            flex: 1;
            height: 30px;
            font-size: 20px;
            padding: 10px;
            border-radius: 2px;
            border: none;
        }
    }
}


</style>