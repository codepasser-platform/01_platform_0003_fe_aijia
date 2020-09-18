<style scoped lang="less">
</style>

<template>
    <div class="layout-container layout-show">
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
    export default class ShowLayout extends Vue {
        private name: string = 'ShowLayout';

        created(): void {
            console.debug('[Lifecycle] <ShowLayout> --> {created}');
        }

        mounted(): void {
            console.debug('[Lifecycle] <ShowLayout> --> {mounted}');
        }

        updated(): void {
            console.debug('[Lifecycle] <ShowLayout> --> {updated}');
        }

        destroyed(): void {
            console.debug('[Lifecycle] <ShowLayout> --> {destroyed}');
        }
    }
</script>
