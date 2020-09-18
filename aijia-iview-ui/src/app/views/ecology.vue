<style scoped lang="less">
    .view-ecology {
        text-align: center;
    }
</style>
<template>
    <div class="view-container view-ecology">
        <img alt="Vue logo" src="../../assets/logo.png">
        <welcome msg="Welcome to Your Vue.js App"/>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapGetters} from 'vuex';
    import {AppPrincipal} from '@/store/modules/app';
    import {SpacesCache} from '@/store/modules/spaces';
    import Welcome from '@/app/components/welcome.vue';

    @Component({
        computed: {
            ...mapGetters(['principal', 'cache'])
        },
        components: {
            Welcome
        }
    })
    export default class EcologyView extends Vue {
        private name: string = 'EcologyView';

        private principal: AppPrincipal | undefined;

        private cache: SpacesCache | undefined;

        created(): void {
            console.debug('[Lifecycle] <EcologyView> --> {created}', this.principal, this.cache);
        }

        mounted(): void {
            console.debug('[Lifecycle] <EcologyView> --> {mounted}');
        }

        updated(): void {
            console.debug('[Lifecycle] <EcologyView> --> {updated}');
        }

        destroyed(): void {
            console.debug('[Lifecycle] <EcologyView> --> {destroyed}');
        }

    }
</script>

