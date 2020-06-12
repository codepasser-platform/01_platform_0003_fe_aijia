<style scoped lang="scss">
    .navigator-container {
        text-align: center;
    }
</style>

<template>
    <div class="component-container navigator-container">
        <div class="navigator">
            <a href="/ui">App</a>
            |
            <router-link :to="{name:'index'}">Index</router-link>
            |
            <router-link :to="{name:'home'}">Home</router-link>
            |
            <router-link :to="{name:'profile'}">Profile</router-link>
            |
            <a href="/ui/client.html">Client</a>
        </div>
        <div class="navigator">
            <router-link :to="{name:'401'}">401</router-link>
            |
            <router-link :to="{name:'403'}">403</router-link>
            |
            <router-link :to="{name:'404'}">404</router-link>
            |
            <router-link :to="{name:'500'}">500</router-link>
        </div>
        <div class="navigator" v-if="principal">
            <router-link :to="{name:'case-list',query:{a:1},hash:'#1',params:{b:1}}">case-list</router-link>
            |
            <router-link :to="{name:'case-detail',query:{a:2},hash:'#2',params:{b:2}}">case-detail</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {mapGetters} from "vuex";
    import {AppPrincipal} from "@/store/modules/app";

    @Component({
        computed: {
            ...mapGetters(['principal'])
        }
    })
    export default class Navigator extends Vue {
        @Prop() private msg!: string;
        private principal: AppPrincipal | undefined;

        created(): void {
            console.debug('[Lifecycle] <Navigator> --> {created}', this.principal);
        }
    }
</script>
