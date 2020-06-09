<style scoped lang="scss">
    .case-view {
        text-align: center;
    }
</style>
<template>
    <div class="view-container case-view">
        <div>this is case list page</div>
    </div>
</template>
<script lang="ts">
    import {mapGetters} from "vuex";

    const _CaseDetailView = {
        name: 'CaseDetailView',
        created: () => {
            console.log('[Lifecycle] <CaseDetailView> --> {created}')
        },
        mounted: () => {
            console.log('[Lifecycle] <CaseDetailView> --> {mounted}')
        },
        updated: () => {
            console.log('[Lifecycle] <CaseDetailView> --> {updated}')
        },
        destroyed: () => {
            console.log('[Lifecycle] <CaseDetailView> --> {destroyed}')
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

    export default _CaseDetailView;
</script>

