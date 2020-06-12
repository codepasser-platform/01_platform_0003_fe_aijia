<style scoped lang="less">
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
            console.debug('[Lifecycle] <ScreenLayout> --> {created}');
        },
        mounted: () => {
            console.debug('[Lifecycle] <ScreenLayout> --> {mounted}');
        },
        updated: () => {
            console.debug('[Lifecycle] <ScreenLayout> --> {updated}');
        },
        destroyed: () => {
            console.debug('[Lifecycle] <ScreenLayout> --> {destroyed}');
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
