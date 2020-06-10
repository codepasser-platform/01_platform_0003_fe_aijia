<style scoped lang="scss">
    .case-view {
        text-align: center;
    }
</style>
<template>
    <div class="view-container case-view">
        <div>this is case detail page</div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapGetters} from "vuex";
    import {AppPrincipal} from "@/store/modules/app";
    import {SpacesCache} from "@/store/modules/spaces";

    @Component({
        computed: {
            ...mapGetters(['principal', 'cache'])
        },
        components: {}
    })
    export default class CaseDetailView extends Vue {
        private name: string = 'CaseDetailView';

        private principal: AppPrincipal | undefined;

        private cache: SpacesCache | undefined;

        created(): void {
            console.debug('[Lifecycle] <CaseDetailView> --> {created}', this.principal, this.cache)
        }

        mounted(): void {
            console.debug('[Lifecycle] <CaseDetailView> --> {mounted}')
        }

        updated(): void {
            console.debug('[Lifecycle] <CaseDetailView> --> {updated}')
        }

        destroyed(): void {
            console.debug('[Lifecycle] <CaseDetailView> --> {destroyed}')
        }

    }
</script>

