<template>
  <div>
    <div class="video-bg">
      <video width="320" height="240" autoplay ref="MusicPlay">
        <source src="@/assets/mp4/樱花樱花想见你.mp4" type="video/mp4">
      </video>
    </div>
    <div>
      <add-text color="255,0,0" style="position:absolute;pointer-events: none" :arr="arr"></add-text>
    </div>
    <div class="bestbutton">
      <my-button message="next" urrl="/#/hidden/nothing"></my-button>
    </div>
  </div>

</template>
<script setup>

import AddText from "@/components/AddText.vue";
import axios from "axios";
import MyButton from "@/components/button/MyButton.vue";
const arr = localStorage.getItem("theLast")?.split(',')

const submit = () => {
  const data = {
    username:localStorage.getItem("username"),
    page:"THELAST"
  }
  axios.post("/api/insertPageLog",data)
}
submit()
</script>

<style scoped lang="scss">
.video-bg {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
