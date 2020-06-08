<style scoped lang="scss">
    .index-view {
        text-align: center;
    }
</style>
<template>
    <div class="view-container index-view">
        <img alt="Vue logo" src="../../assets/logo.png">
        <welcome msg="Welcome to Your Vue.js Client"/>
    </div>
</template>
<script lang="ts">
    import Welcome from '@/components/welcome.vue'
    import {mapGetters} from "vuex";

    const _IndexView = {
        name: 'IndexView',
        created: () => {
            console.log('[lifecycle] <IndexView> --> {created}')
        },
        mounted: () => {
            console.log('[lifecycle] <IndexView> --> {mounted}')
        },
        updated: () => {
            console.log('[lifecycle] <IndexView> --> {updated}')
        },
        destroyed: () => {
            console.log('[lifecycle] <IndexView> --> {destroyed}')
        },
        data: () => {
            return {};
        },
        methods: {},
        computed: {
            ...mapGetters([])
        },
        components: {
            Welcome
        }
    }

    export default _IndexView;
</script>

