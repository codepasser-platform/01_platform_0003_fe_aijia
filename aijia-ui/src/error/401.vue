<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "./style.scss";
</style>
<!-- Template -->
<template>
    <div class="view-container container text-center">
        <div class="error-container">
            <div class="error-code">
                <span>4</span>
                <span><span class="screen-reader-text">0</span></span>
                <span>1</span>
            </div>
            <div class="error-message">
                抱歉，您需要登录后访问。
            </div>
        </div>
    </div>
</template>

<!-- Script -->
<script>
    import {mapGetters} from 'vuex';

    const _ERROR_401 = {
        name: 'ERROR_401',
        created: () => {
            console.log('[Lifecycle] <ERROR_401> --> {created}')
        },
        mounted: () => {
            console.log('[Lifecycle] <ERROR_401> --> {mounted}')
        },
        updated: () => {
            console.log('[Lifecycle] <ERROR_401> --> {updated}')
        },
        destroyed: () => {
            console.log('[Lifecycle] <ERROR_401> --> {destroyed}')
        },
        data: () => {
            return {};
        },
        methods: {},
        computed: {
            ...mapGetters([])
        },
        components: {}
    };
    export default _ERROR_401;
</script>
