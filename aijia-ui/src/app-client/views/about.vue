<style scoped lang="scss">
    .about-view {
        text-align: center;
    }
</style>
<template>
    <div class="view-container about-view">
        <div>this is client about page</div>
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
    export default class AboutView extends Vue {
        private name: string = 'AboutView';

        private principal: AppPrincipal | undefined;

        private cache: SpacesCache | undefined;

        created(): void {
            console.debug('[Lifecycle] <AboutView> --> {created}', this.principal, this.cache)
        }

        mounted(): void {
            console.debug('[Lifecycle] <AboutView> --> {mounted}')
        }

        updated(): void {
            console.debug('[Lifecycle] <AboutView> --> {updated}')
        }

        destroyed(): void {
            console.debug('[Lifecycle] <AboutView> --> {destroyed}')
        }

    }
</script>

