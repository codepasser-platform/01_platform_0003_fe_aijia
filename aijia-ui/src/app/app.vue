<style lang="scss">
</style>

<template>
    <div class="app-container">
        <router-view/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {mapGetters} from "vuex";

    @Component({
        computed: {
            ...mapGetters([])
        },
        components: {}
    })
    export default class App extends Vue {
        private name: string = 'App';

        beforeCreate(): void {
            console.debug('[Lifecycle] <App> --> {beforeCreate}')
        }

        created(): void {
            console.debug('[Lifecycle] <App> --> {created}')
        }

        beforeMount(): void {
            console.debug('[Lifecycle] <App> --> {beforeMount}')
        }

        mounted(): void {
            console.debug('[Lifecycle] <App> --> {mounted}')
        }

        beforeUpdate(): void {
            console.debug('[Lifecycle] <App> --> {beforeUpdate}')
        }

        updated(): void {
            console.debug('[Lifecycle] <App> --> {updated}')
        }

        activated(): void {
            console.debug('[Lifecycle] <App> --> {activated}')
        }

        deactivated(): void {
            console.debug('[Lifecycle] <App> --> {deactivated}')
        }

        beforeDestroy(): void {
            console.debug('[Lifecycle] <App> --> {beforeDestroy}')
        }

        destroyed(): void {
            console.debug('[Lifecycle] <App> --> {destroyed}')
        }
    }
</script>