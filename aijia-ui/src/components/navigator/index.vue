<style scoped lang="scss">
    .navigator-container{
        text-align: center;
    }
</style>

<template>
    <div class="component-container navigator-container">
        <router-link :to="{name:'index'}">App</router-link>
        |
        <router-link :to="{name:'home'}">Home</router-link>
        |
        <router-link :to="{name:'about'}">About</router-link>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Navigator extends Vue {
        @Prop() private msg!: string;
    }
</script>
