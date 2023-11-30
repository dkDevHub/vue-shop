<template>
    <div class="loading">
        <slot/>
    </div>
</template>

<script>
    
</script>

<style lang="scss" scoped>
.loading{
    font-size: 50px;
    opacity: 0.7;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(1px);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>