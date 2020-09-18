<style scoped lang="less">
    .view-index {
        text-align: center;
    }
</style>
<template>
    <div class="view-container view-index">
        <div>this is client index page</div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapGetters} from 'vuex';
    import {AppPrincipal} from '@/store/modules/app';
    import {SpacesCache} from '@/store/modules/spaces';

    @Component({
        computed: {
            ...mapGetters(['principal', 'cache'])
        },
        components: {}
    })
    export default class IndexView extends Vue {
        private name: string = 'IndexView';

        private principal: AppPrincipal | undefined;

        private cache: SpacesCache | undefined;

        created(): void {
            console.debug('[Lifecycle] <IndexView> --> {created}', this.principal, this.cache);
        }

        mounted(): void {
            console.debug('[Lifecycle] <IndexView> --> {mounted}');
        }

        updated(): void {
            console.debug('[Lifecycle] <IndexView> --> {updated}');
        }

        destroyed(): void {
            console.debug('[Lifecycle] <IndexView> --> {destroyed}');
        }

    }
</script>

