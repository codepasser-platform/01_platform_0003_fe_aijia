<style scoped lang="less">
</style>

<template>
    <div class="layout-container layout-module">
        <div class="layout-body-container">
            <wg-navigator></wg-navigator>
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
    export default class ModuleLayout extends Vue {
        private name: string = 'ModuleLayout';

        created(): void {
            console.debug('[Lifecycle] <ModuleLayout> --> {created}');
        }

        mounted(): void {
            console.debug('[Lifecycle] <ModuleLayout> --> {mounted}');
        }

        updated(): void {
            console.debug('[Lifecycle] <ModuleLayout> --> {updated}');
        }

        destroyed(): void {
            console.debug('[Lifecycle] <ModuleLayout> --> {destroyed}');
        }
    }
</script>
