<style lang="scss">
</style>

<template>
    <div class="client-container">
        <router-view/>
    </div>
</template>

<script lang="ts">
    import Welcome from '@/components/welcome.vue';
    import {Component, Vue} from 'vue-property-decorator';
    import {mapGetters} from "vuex";

    @Component({
        computed: {
            ...mapGetters([])
        },
        components: {
            Welcome
        }
    })
    export default class Client extends Vue {
        private name: string = 'Client';

        beforeCreate(): void {
            console.debug('[Lifecycle] <Client> --> {beforeCreate}')
        }

        created(): void {
            console.debug('[Lifecycle] <Client> --> {created}')
        }

        beforeMount(): void {
            console.debug('[Lifecycle] <Client> --> {beforeMount}')
        }

        mounted(): void {
            console.debug('[Lifecycle] <Client> --> {mounted}')
        }

        beforeUpdate(): void {
            console.debug('[Lifecycle] <Client> --> {beforeUpdate}')
        }

        updated(): void {
            console.debug('[Lifecycle] <Client> --> {updated}')
        }

        activated(): void {
            console.debug('[Lifecycle] <Client> --> {activated}')
        }

        deactivated(): void {
            console.debug('[Lifecycle] <Client> --> {deactivated}')
        }

        beforeDestroy(): void {
            console.debug('[Lifecycle] <Client> --> {beforeDestroy}')
        }

        destroyed(): void {
            console.debug('[Lifecycle] <Client> --> {destroyed}')
        }
    }
</script>