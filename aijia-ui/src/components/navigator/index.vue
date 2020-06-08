<style scoped lang="scss">
    .navigator-container {
        text-align: center;
    }
</style>

<template>
    <div class="component-container navigator-container">
        <a href="/ui">App</a>
        |
        <router-link :to="{name:'index'}">Index</router-link>
        |
        <router-link :to="{name:'home'}">Home</router-link>
        |
        <router-link :to="{name:'about'}">About</router-link>
        |
        <a href="/ui/client.html">Client</a>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Navigator extends Vue {
        @Prop() private msg!: string;
    }
</script>
