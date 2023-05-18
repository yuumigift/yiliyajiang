<template>
    <div class="c__overhang_star" :style="getStyle()">
        <div class="line">
            <div class="line--inner"></div>
        </div>
        <div class="star">
            <div class="star--inner" v-if="render_y >= y">
                <video autoplay muted @ended="handleEnded(item)" v-show="is_growing">
                    <source src="@/assets/mp4/星星（生成）.mp4" type="video/mp4" />
                </video>
                <video autoplay loop muted v-show="!is_growing">
                    <source src="@/assets/mp4/星星（完整）.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    // 横坐标
    x: { default: 0 },
    // 纵坐标
    y: { default: 0 },
    // 开场等待时间
    freezing: { default: 0 },
    // 初始位置（0：右边，Math.PI：左边）
    angle: { default: 0 },
    // 晃动速度
    speed: { default: 10 },
    // 晃动幅度
    shake_range: { default: 30 },
});

const config = {
    START_Y: -40, // 初始y位置
    SPEED_FALL: 10, // 开场下落速度
};
const is_growing = ref(true);
const render_x = ref(Math.cos(props.angle) * props.shake_range + props.x);
const render_y = ref(config.START_Y);
const render_angle = ref(props.angle);
const render_freezing = ref(props.freezing);
let speed_a = 0.6;

const handleEnded = () => {
    is_growing.value = false;
};
const getStyle = () => {
    return {
        left: `${render_x.value}px`,
        top: `${render_y.value}px`,
    };
};
const enterFrame = () => {
    requestAnimationFrame(enterFrame);
    if (render_freezing.value >= 0) {
        // 根据freezing时长等待
        render_freezing.value -= 0.01;
    } else if (render_y.value < props.y) {
        // 星星成长中
        render_y.value += config.SPEED_FALL * 0.01;
    } else {
        // 星星摇晃
        if (!is_growing.value) {
            if (speed_a < 1) {
                render_angle.value += props.speed * 0.001 * speed_a * speed_a;
                speed_a += 0.0005;
            } else {
                render_angle.value += props.speed * 0.001;
            }
            if (render_angle.value > Math.PI * 2) {
                render_angle.value -= Math.PI * 2;
            }
            render_x.value = Math.cos(render_angle.value) * props.shake_range + props.x;
        }
    }
    console.log(render_x.value, render_y.value);
};
enterFrame();
</script>

<style lang="scss" scoped>
.c__overhang_star {
    position: absolute;
    display: grid;
    width: 200px;
    grid-template-rows: auto auto;
}
.line {
    position: relative;
    justify-self: center;
    height: 0;

    &--inner {
        position: absolute;
        justify-self: center;
        width: 1px;
        height: 500px;
        bottom: -40px;
        transform: translateX(2px);
        border-right: dashed 1px #fff;
        box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff;
    }
}
.star {
    position: relative;
    justify-self: center;
    width: 200px;
    height: 0;

    &--inner {
        position: absolute;
        width: 100%;
        top: 0;
    }
    video {
        mix-blend-mode: screen;
    }
}
</style>
