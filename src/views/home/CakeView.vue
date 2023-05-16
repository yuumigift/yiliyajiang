<template>
  <div class="c__cake_view">
    <audio :src="mus" class="media-audio" loop autoplay ref="MusicPlay"></audio>
    <div class="desk">
      <img src="../../assets/images/桌布.jpg" alt="" />
    </div>
    <div class="cake">
      <img src="../../assets/images/生日蛋糕.png" alt="" />
    </div>
    <div class="star_container">
      <div class="line" v-for="(item, index) in stars">
        <!-- 吊线放这里 -->
      </div>
      <div class="stars" v-for="(item, index) in stars" :key="index" :style="{ left: `${item.x}px` }">
        <div class="stars--inner">
          <video autoplay muted @ended="handleEnded(item)">
            <source src="../../assets/mp4/星星_1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AddText from "@/components/AddText.vue";

export default {
  components: { AddText },
  data() {
    return {
      RANGE: 30, // 星星摇晃幅度
      mus: require("../../assets/audios/泠鸢yousa - 勾指起誓.mp3"),
      stars: [
        // speed：星星摇晃频率
        { x: 0, speed: 1.3, angle: Math.PI, is_play: false },
        { x: 0, speed: 1.6, angle: Math.PI, is_play: false },
        { x: 0, speed: 1.5, angle: 0, is_play: false },
        { x: 0, speed: 1.7, angle: 0, is_play: false },
      ],
    };
  },
  mounted() {
    this.$refs.MusicPlay.volume = 0.15;
    this.enterFrame();
  },
  methods: {
    handleEnded(item) {
      item.is_play = true;
    },
    musicPlay() {
      this.$refs.MusicPlay.play();
    },
    move(item) {
      let { x, speed, angle, is_play } = item;
      if (item.is_play) {
        angle += speed * 0.01;
      }
      if (angle > Math.PI * 2) {
        angle -= Math.PI * 2;
      }
      x = Math.cos(angle) * this.RANGE;
      return { x, speed, angle, is_play };
    },
    enterFrame() {
      requestAnimationFrame(this.enterFrame);
      this.stars = this.stars.map((item) => {
        return this.move(item);
      });
    },
  },
};
</script>
<style scoped lang="scss">
video {
  mix-blend-mode: screen;
}
.c__cake_view {
  flex: 1;
  display: grid;
  overflow: hidden;
}
.desk {
  position: relative;
  grid-row: 1;
  grid-column: 1;
  backdrop-filter: blur(20px);
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.cake {
  position: relative;
  grid-row: 1;
  grid-column: 1;
  align-self: center;
  justify-self: center;
  width: 500px;
  transform: translateY(50px);

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.star_container {
  position: relative;
  grid-row: 1;
  grid-column: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100px auto 1fr;
}
.stars {
  position: relative;

  &--inner {
    position: absolute;
  }
}
</style>
