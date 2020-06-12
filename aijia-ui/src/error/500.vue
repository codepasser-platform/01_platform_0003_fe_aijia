<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "./style.scss";
</style>
<!-- Template -->
<template>
    <div class="view-container container text-center">
        <div class="error-container">
            <div class="error-code">
                <span>5</span>
                <span><span class="screen-reader-text">0</span></span>
                <span>0</span>
            </div>
            <div class="error-message">
                抱歉，服务异常！请联系管理员解决。
            </div>
        </div>

    </div>
</template>
<!-- Script -->
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapGetters} from "vuex";

    @Component({
        computed: {
            ...mapGetters([])
        },
        components: {}
    })
    export default class ERROR_500_VIEW extends Vue {
        private name: string = 'ERROR_500_VIEW';

        created(): void {
            console.debug('[Lifecycle] <ERROR_500_VIEW> --> {created}');
        }

        mounted(): void {
            console.debug('[Lifecycle] <ERROR_500_VIEW> --> {mounted}');
        }

        updated(): void {
            console.debug('[Lifecycle] <ERROR_500_VIEW> --> {updated}');
        }

        destroyed(): void {
            console.debug('[Lifecycle] <ERROR_500_VIEW> --> {destroyed}');
        }
    };
</script>
