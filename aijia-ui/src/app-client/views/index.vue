<style scoped lang="less">
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
    import Welcome from '@/app-client/components/welcome.vue';
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

