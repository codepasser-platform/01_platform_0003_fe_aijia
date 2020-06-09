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
            console.log('[lifecycle] <CaseListView> --> {created}')
        },
        mounted: () => {
            console.log('[lifecycle] <CaseListView> --> {mounted}')
        },
        updated: () => {
            console.log('[lifecycle] <CaseListView> --> {updated}')
        },
        destroyed: () => {
            console.log('[lifecycle] <CaseListView> --> {destroyed}')
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

