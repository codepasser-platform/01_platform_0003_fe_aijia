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
    import Welcome from '@/components/welcome.vue';
    import {Component, Vue} from 'vue-property-decorator';
    import {mapGetters} from "vuex";
    import {AppPrincipal} from "@/store/modules/app";
    import {SpacesCache} from "@/store/modules/spaces";

    @Component({
        computed: {
            ...mapGetters(['principal', 'cache'])
        },
        components: {
            Welcome
        }
    })
    export default class IndexView extends Vue {
        private name: string = 'IndexView';

        private principal: AppPrincipal | undefined;

        private cache: SpacesCache | undefined;

        created(): void {
            console.log('[Lifecycle] <IndexView> --> {created}', this.principal, this.cache)
        }

        mounted(): void {
            console.log('[Lifecycle] <IndexView> --> {mounted}')
        }

        updated(): void {
            console.log('[Lifecycle] <IndexView> --> {updated}')
        }

        destroyed(): void {
            console.log('[Lifecycle] <IndexView> --> {destroyed}')
        }

    }
</script>

