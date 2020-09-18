<style scoped lang="less">
    .widget-background {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-around;
        z-index: -1;

        .nets-bg {
            z-index: -1;
        }
    }
</style>

<template>
    <div class="widget-container widget-background">
        <canvas ref='nets-bg' class="nets-bg"></canvas>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {mapGetters} from 'vuex';

    @Component({
        computed: {
            ...mapGetters([])
        },
        components: {}
    })
    export default class BackgroundWidget extends Vue {
        private name: string = 'BackgroundWidget';

        private _canvas!: HTMLCanvasElement;

        private _ctx!: CanvasRenderingContext2D;

        private resizeTimer!: number;

        // 延迟计算高度
        private lazeRender!: boolean;

        get canvas(): HTMLCanvasElement {
            return this._canvas;
        }

        set canvas(value: HTMLCanvasElement) {
            this._canvas = value;
        }

        get ctx(): CanvasRenderingContext2D {
            return this._ctx;
        }

        set ctx(value: CanvasRenderingContext2D) {
            this._ctx = value;
        }

        created(): void {
            console.debug('[Lifecycle] <BackgroundWidget> --> {created}');
        }

        mounted(): void {
            console.debug('[Lifecycle] <BackgroundWidget> --> {mounted}');
            this.canvas = <HTMLCanvasElement>this.$refs['nets-bg'];
            this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');

            this.lazeRender = true;
            this.renderBackground();
            window.addEventListener('resize', this.windowResize);
            // 注册方式二
            // window.onresize = () => {
            //     return (() => {
            //     })();
            // };
        }

        updated(): void {
            console.debug('[Lifecycle] <BackgroundWidget> --> {updated}');
        }

        destroyed(): void {
            window.removeEventListener("resize", this.windowResize);
            console.debug('[Lifecycle] <BackgroundWidget> --> {destroyed}');
        }

        @Watch('$route')
        private routerChange(to: any, from: any) {
            console.debug('[Watch] <BackgroundWidget> --> {routerChange}');
            this.lazeRender = true;
            this.renderBackground();
        }

        private windowResize(): void {
            if (this.resizeTimer) {
                clearTimeout(this.resizeTimer);
            }
            this.resizeTimer = setTimeout(() => { // 只执行最后一个定时器的 结果
                console.debug('[Listener] <BackgroundWidget> --> {windowResize}');
                this.renderBackground();
            }, 300);
        }

        private renderBackground(): void {
            let limitX !: number;
            let limitY !: number;
            let dw: number = document.body.scrollWidth;
            let dh: number = document.body.scrollHeight;
            let cw: number = document.documentElement.clientWidth
            let ch: number = document.documentElement.clientHeight;
            // 内容 >= 窗口 => 内容
            // 内容 < 窗口 => 窗口
            limitX = dw >= cw ? dw : cw;
            limitY = dh >= ch ? dh : ch;
            this.canvas.width = limitX;
            this.canvas.height = limitY;
            // console.log('[Methods] <BackgroundWidget> --> {renderBackground}', cw, ch, dw, dh, limitX, limitY);
            // #f6f6f6 => rgba(246, 246, 246, 1)
            this.drawGrid('rgba(246, 246, 246, 1)', 'rgba(255, 255, 255, 1)', 20, 20);

            if (this.lazeRender) {
                setTimeout(() => {
                    this.lazeRender = false;
                    this.renderBackground();
                }, 1000)
            }
        }

        private drawGrid(stroke: string, fill: string, transverse: number, vertical: number): void {
            let limitX: number = this.ctx.canvas.width;
            let limitY: number = this.ctx.canvas.height;
            // console.log('[Methods] <BackgroundWidget> --> {drawGrid}', limitX, limitY);
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = stroke;
            this.ctx.fillStyle = fill;
            this.ctx.fillRect(0, 0, limitX, limitY);
            this.ctx.beginPath();
            this.ctx.translate(.5, .5);
            // 横线
            for (let y = transverse; y <= limitY; y += transverse) {
                this.ctx.moveTo(0, y);
                this.ctx.lineTo(limitX, y);
            }
            // 竖线
            for (let x = vertical; x <= limitX; x += vertical) {
                this.ctx.moveTo(x, 0);
                this.ctx.lineTo(x, limitY);
            }
            this.ctx.closePath();
            this.ctx.stroke();
        }

    }
</script>
