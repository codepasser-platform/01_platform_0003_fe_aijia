<style scoped lang="less">
    .profile-view {
        text-align: center;
    }
</style>
<template>
    <div class="view-container profile-view">
        <div>this is profile page</div>
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
    export default class ProfileView extends Vue {
        private name: string = 'ProfileView';

        private principal: AppPrincipal | undefined;

        private cache: SpacesCache | undefined;

        created(): void {
            console.debug('[Lifecycle] <ProfileView> --> {created}', this.principal, this.cache);
        }

        mounted(): void {
            console.debug('[Lifecycle] <ProfileView> --> {mounted}');
        }

        updated(): void {
            console.debug('[Lifecycle] <ProfileView> --> {updated}');
        }

        destroyed(): void {
            console.debug('[Lifecycle] <ProfileView> --> {destroyed}');
        }

    }
</script>

