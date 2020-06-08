<style scoped lang="scss">
    .home-view {
        text-align: center;
    }
</style>
<template>
    <div class="view-container home-view">
        <div>this is client home page</div>
    </div>
</template>
<script lang="ts">
    import {mapGetters} from "vuex";

    const _HomeView = {
        name: 'HomeView',
        created: () => {
            console.log('[lifecycle] <HomeView> --> {created}')
        },
        mounted: () => {
            console.log('[lifecycle] <HomeView> --> {mounted}')
        },
        updated: () => {
            console.log('[lifecycle] <HomeView> --> {updated}')
        },
        destroyed: () => {
            console.log('[lifecycle] <HomeView> --> {destroyed}')
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

