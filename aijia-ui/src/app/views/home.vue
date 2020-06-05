<template>
    <div class="home">
        <img alt="Vue logo" src="../../assets/logo.png">
        <Welcome msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Welcome from '@/components/welcome.vue'

    export default {
        name: 'Home',
        components: {
            Welcome
        }
    }
</script>
<style lang="scss">
</style>