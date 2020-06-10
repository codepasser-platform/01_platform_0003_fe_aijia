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
    export default class CaseListView extends Vue {
        private name: string = 'CaseListView';

        private principal: AppPrincipal | undefined;

        private cache: SpacesCache | undefined;

        created(): void {
            console.debug('[Lifecycle] <CaseListView> --> {created}', this.principal, this.cache);
        }

        mounted(): void {
            console.debug('[Lifecycle] <CaseListView> --> {mounted}');
        }

        updated(): void {
            console.debug('[Lifecycle] <CaseListView> --> {updated}');
        }

        destroyed(): void {
            console.debug('[Lifecycle] <CaseListView> --> {destroyed}');
        }

    }
</script>

