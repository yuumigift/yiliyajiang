<template>
  <div ref="ref_page" class="c__star_page" @mousemove="handleMouseMove">
    <div class="star" v-for="(star, index) in Star.list" :key="index" :style="Star.getStyle(star)">
      <img v-if="star.img === 0" src="../../assets/images/star/starthree.png" alt="" />
      <img v-if="star.img === 1" src="../../assets/images/star/startwo.png" alt="" />
      <img v-if="star.img === 2" src="../../assets/images/star/starone.png" alt="" />
      <img v-if="star.img === 3" src="../../assets/images/star/starfour.png" alt="" />
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const ref_page = ref();

// Star模块
const Star = reactive({
  config: {
    size: 40,
    rotation_speed: 6,
    gravity: 8,
  },
  list: [],
  getStyle(item) {
    return {
      width: `${item.size}px`,
      height: `${item.size}px`,
      left: `${item.x}px`,
      top: `${item.y}px`,
      transform: `translate(-50%, -50%) rotate(${(item.r * 180) / Math.PI}deg)`,
      opacity: item.opacity,
    };
  },
  addStar(x, y) {
    const direction = Math.random() * Math.PI * 2;
    Star.list.push({
      x,
      y,
      r: Math.random() * Math.PI * 2,
      vx: Math.cos(direction),
      vy: Math.sin(direction),
      vr: Math.random() * Star.config.rotation_speed - Star.config.rotation_speed / 2,
      size: Math.random() * Star.config.size + Star.config.size / 2,
      opacity: Math.random() * 0.2 + 0.8,
      img: Math.floor(Math.random() * 4),
      is_delete: false,
    });
  },
  enterFrame() {
    Star.list = Star.list.filter((star) => !star.is_delete);
    Star.list.forEach((star) => {
      star.x += star.vx;
      star.y += star.vy;
      star.r += star.vr / 100;
      star.vy += Star.config.gravity / 1000;
      star.opacity -= 0.005;
      if (star.opacity < 0) {
        star.is_delete = true;
      }
    });
    requestAnimationFrame(Star.enterFrame);
  },
});

let can_add_star = true;
let timer_add_star = 0;
const handleMouseMove = (e) => {
  if (can_add_star) {
    can_add_star = false;
    timer_add_star = setTimeout(() => {
      clearTimeout(timer_add_star);
      can_add_star = true;
    }, 50);
    const rect = ref_page.value.getBoundingClientRect();
    Star.addStar(e.clientX - rect.left, e.clientY - rect.top);
  }
};

Star.enterFrame();
</script>

<style scoped lang="scss">
.c__star_page {
  display: grid;
  position: relative;
  overflow: hidden;
  color: #ffc0cb;
}
.content {
  display: grid;
  align-items: center;
  justify-items: center;
}
.star {
  pointer-events: none;
  position: absolute;
  z-index: 99;
  pointer-events: none;
  & > img {
    width: 100%;
    height: 100%;
  }
}
</style>
