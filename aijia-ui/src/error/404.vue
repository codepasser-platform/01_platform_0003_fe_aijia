<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "./style.less";
</style>
<!-- Template -->
<template>
    <div class="view-container container text-center">
        <div class="error-container">
            <div class="error-code">
                <span>4</span>
                <span><span class="screen-reader-text">0</span></span>
                <span>4</span>
            </div>
            <div class="error-message">
                糟糕，您要找的网页不存在。
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
    export default class ERROR_404_VIEW extends Vue {
        private name: string = 'ERROR_404_VIEW';

        created(): void {
            console.debug('[Lifecycle] <ERROR_404_VIEW> --> {created}');
        }

        mounted(): void {
            console.debug('[Lifecycle] <ERROR_404_VIEW> --> {mounted}');
        }

        updated(): void {
            console.debug('[Lifecycle] <ERROR_404_VIEW> --> {updated}');
        }

        destroyed(): void {
            console.debug('[Lifecycle] <ERROR_404_VIEW> --> {destroyed}');
        }
    };
</script>
