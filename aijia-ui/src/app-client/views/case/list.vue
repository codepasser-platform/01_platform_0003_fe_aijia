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

    const _CaseListView = {
        name: 'CaseListView',
        created: () => {
            console.log('[Lifecycle] <CaseListView> --> {created}')
        },
        mounted: () => {
            console.log('[Lifecycle] <CaseListView> --> {mounted}')
        },
        updated: () => {
            console.log('[Lifecycle] <CaseListView> --> {updated}')
        },
        destroyed: () => {
            console.log('[Lifecycle] <CaseListView> --> {destroyed}')
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

    export default _CaseListView;
</script>

