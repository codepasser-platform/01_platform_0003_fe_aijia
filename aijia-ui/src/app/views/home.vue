<style scoped lang="scss">
    .home-view {
        text-align: center;
    }
</style>
<template>
    <div class="view-container home-view">
        <div>this is home page</div>
    </div>
</template>
<script lang="ts">
    import {mapGetters} from "vuex";

    const _HomeView = {
        name: 'HomeView',
        created: () => {
            console.log('[Lifecycle] <HomeView> --> {created}')
        },
        mounted: () => {
            console.log('[Lifecycle] <HomeView> --> {mounted}')
        },
        updated: () => {
            console.log('[Lifecycle] <HomeView> --> {updated}')
        },
        destroyed: () => {
            console.log('[Lifecycle] <HomeView> --> {destroyed}')
        },
        data: () => {
            return {};
        },
        methods: {},
        computed: {
            ...mapGetters([])
        },
        components: {}
    }

    export default _HomeView;
</script>

