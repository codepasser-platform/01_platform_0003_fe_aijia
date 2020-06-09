<style lang="scss">
</style>

<template>
    <div class="client-container">
        <router-view/>
    </div>
</template>

<script lang="ts">
    import {mapGetters} from 'vuex';

    const _Client = {
        name: 'Client',
        /** 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。**/
        beforeCreate: () => {
            console.log('[Lifecycle] <Client> --> {beforeCreate}')
        },
        /**
         * 实例已经创建完成之后被调用。
         * 在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。
         * 然而，挂载阶段还没开始，$el 属性目前不可见。 可以在组件的这个期间请求数据，如果是keep-alive组件会被缓存起来，生命周期不会再次触发，
         * 如果需要更新数据可以watch当前router变化，如果router是当前组件所在的router则请求数据。
         **/
        created: () => {
            console.log('[Lifecycle] <Client> --> {created}')
        },
        /** 在挂载开始之前被调用：相关的 render 函数首次被调用。**/
        beforeMount: () => {
            console.log('[Lifecycle] <Client> --> {beforeMount}')
        },
        /** vm.$el已挂载在文档内，对已有dom节点的操作可以在这期间进行。 **/
        mounted: () => {
            console.log('[Lifecycle] <Client> --> {mounted}')
        },
        /**
         * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
         * 可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
         **/
        beforeUpdate: () => {
            console.log('[Lifecycle] <Client> --> {beforeUpdate}')
        },
        /**
         * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
         * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
         * 然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。
         **/
        updated: () => {
            console.log('[Lifecycle] <Client> --> {updated}')
        },
        /** keep-alive 组件激活时调用。**/
        activated: () => {
            console.log('[Lifecycle] <Client> --> {activated}')
        },
        /** keep-alive 组件停用时调用。**/
        deactivated: () => {
            console.log('[Lifecycle] <Client> --> {deactivated}')
        },
        /** 实例销毁之前调用。在这一步，实例仍然完全可用。**/
        beforeDestroy: () => {
            console.log('[Lifecycle] <Client> --> {beforeDestroy}')
        },
        /** Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。**/
        destroyed: () => {
            console.log('[Lifecycle] <Client> --> {destroyed}')
        },
        data: () => {
            return {};
        },
        methods: {},
        computed: {
            ...mapGetters([])
        },
        components: {}
    }
    export default _Client;
</script>