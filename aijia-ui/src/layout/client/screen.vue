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
            console.log('[lifecycle] <ScreenLayout> --> {created}')
        },
        mounted: () => {
            console.log('[lifecycle] <ScreenLayout> --> {mounted}')
        },
        updated: () => {
            console.log('[lifecycle] <ScreenLayout> --> {updated}')
        },
        destroyed: () => {
            console.log('[lifecycle] <ScreenLayout> --> {destroyed}')
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
