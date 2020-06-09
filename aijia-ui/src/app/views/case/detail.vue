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
            console.log('[lifecycle] <CaseDetailView> --> {created}')
        },
        mounted: () => {
            console.log('[lifecycle] <CaseDetailView> --> {mounted}')
        },
        updated: () => {
            console.log('[lifecycle] <CaseDetailView> --> {updated}')
        },
        destroyed: () => {
            console.log('[lifecycle] <CaseDetailView> --> {destroyed}')
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

