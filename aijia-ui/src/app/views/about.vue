<style scoped lang="scss">
    .about-view {
        text-align: center;
    }
</style>
<template>
    <div class="view-container about-view">
        <div>this is about page</div>
    </div>
</template>
<script lang="ts">
    import {mapGetters} from "vuex";

    const _AboutView = {
        name: 'AboutView',
        created: () => {
            console.log('[Lifecycle] <AboutView> --> {created}')
        },
        mounted: () => {
            console.log('[Lifecycle] <AboutView> --> {mounted}')
        },
        updated: () => {
            console.log('[Lifecycle] <AboutView> --> {updated}')
        },
        destroyed: () => {
            console.log('[Lifecycle] <AboutView> --> {destroyed}')
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

    export default _AboutView;
</script>

