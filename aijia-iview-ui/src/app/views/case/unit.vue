<style scoped lang="less">
    .view-unit {
        text-align: center;
    }
</style>
<template>
    <div class="view-container view-unit">
        <div>this is case unit page
        </div>
        <div>{{count}}</div>
        <button @click="increment">自增</button>
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
    export default class CaseUnitView extends Vue {

        private name: string = 'CaseUnitView';

        private count: number = 0;

        created(): void {
            console.debug('[Lifecycle] <CaseUnitView> --> {created}');
        }

        mounted(): void {
            console.debug('[Lifecycle] <CaseUnitView> --> {mounted}');
        }

        updated(): void {
            console.debug('[Lifecycle] <CaseUnitView> --> {updated}');
        }

        destroyed(): void {
            console.debug('[Lifecycle] <CaseUnitView> --> {destroyed}');
        }

        increment(): void {
            this.count = ++this.count;
        }
    }
</script>

