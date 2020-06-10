<style scoped lang="scss">
    .home-view {
        text-align: center;
    }
</style>
<template>
    <div class="view-container home-view">
        <div>this is home page</div>
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
    export default class HomeView extends Vue {
        private name: string = 'HomeView';

        private principal: AppPrincipal | undefined;

        private cache: SpacesCache | undefined;

        created(): void {
            console.debug('[Lifecycle] <HomeView> --> {created}', this.principal, this.cache)
        }

        mounted(): void {
            console.debug('[Lifecycle] <HomeView> --> {mounted}')
        }

        updated(): void {
            console.debug('[Lifecycle] <HomeView> --> {updated}')
        }

        destroyed(): void {
            console.debug('[Lifecycle] <HomeView> --> {destroyed}')
        }

    }
</script>

