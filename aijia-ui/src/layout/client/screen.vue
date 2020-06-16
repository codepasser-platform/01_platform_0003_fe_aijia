<style scoped lang="less">
</style>

<template>
    <div class="layout-container layout-screen">
        <div class="layout-body body-container">
            <navigator></navigator>
            <router-view/>
        </div>
    </div>
</template>

<script lang="ts">
    import Navigator from '@/app-client/components/navigator/index.vue';
    import {Component, Vue} from 'vue-property-decorator';
    import {mapGetters} from "vuex";

    @Component({
        computed: {
            ...mapGetters([])
        },
        components: {Navigator}
    })
    export default class ScreenLayout extends Vue {
        private name: string = 'ScreenLayout';

        created(): void {
            console.debug('[Lifecycle] <ScreenLayout> --> {created}');
        }

        mounted(): void {
            console.debug('[Lifecycle] <ScreenLayout> --> {mounted}');
        }

        updated(): void {
            console.debug('[Lifecycle] <ScreenLayout> --> {updated}');
        }

        destroyed(): void {
            console.debug('[Lifecycle] <ScreenLayout> --> {destroyed}');
        }
    }
</script>
