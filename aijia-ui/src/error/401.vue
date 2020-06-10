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
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapGetters} from "vuex";

    @Component({
        computed: {
            ...mapGetters([])
        },
        components: {}
    })
    export default class ERROR_401_VIEW extends Vue {
        private name: string = 'ERROR_401_VIEW';

        created(): void {
            console.debug('[Lifecycle] <ERROR_401_VIEW> --> {created}');
        }

        mounted(): void {
            console.debug('[Lifecycle] <ERROR_401_VIEW> --> {mounted}');
        }

        updated(): void {
            console.debug('[Lifecycle] <ERROR_401_VIEW> --> {updated}');
        }

        destroyed(): void {
            console.debug('[Lifecycle] <ERROR_401_VIEW> --> {destroyed}');
        }
    };
</script>
