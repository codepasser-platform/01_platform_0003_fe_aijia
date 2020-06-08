<style scoped lang="scss">
</style>

<template>
    <div class="layout-container layout-screen">
        <div class="layout-body body-container">
            <navigator></navigator>
            <router-view/>
        </div>
    </div>
</template>

<script lang="ts">
    import Navigator from '@/components/navigator/index.vue'

    const _ScreenLayout = {
        name: 'ScreenLayout',
        components: {
            Navigator
        }
    }
    export default _ScreenLayout;
</script>
