<style scoped lang="less">
</style>

<template>
    <div class="layout-container layout-screen">
        <wg-background></wg-background>
        <div class="layout-body-container">
            <wg-base-navigator></wg-base-navigator>
            <router-view/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapGetters} from 'vuex';

    @Component({
        computed: {
            ...mapGetters([])
        },
        components: {}
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
