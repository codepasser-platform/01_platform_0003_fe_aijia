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
    import {mapGetters} from "vuex";

    const _ScreenLayout = {
        name: 'ScreenLayout',
        created: () => {
            console.log('[Lifecycle] <ScreenLayout> --> {created}')
        },
        mounted: () => {
            console.log('[Lifecycle] <ScreenLayout> --> {mounted}')
        },
        updated: () => {
            console.log('[Lifecycle] <ScreenLayout> --> {updated}')
        },
        destroyed: () => {
            console.log('[Lifecycle] <ScreenLayout> --> {destroyed}')
        },
        data: () => {
            return {};
        },
        methods: {},
        computed: {
            ...mapGetters([])
        },
        components: {
            Navigator
        }
    }
    export default _ScreenLayout;
</script>
