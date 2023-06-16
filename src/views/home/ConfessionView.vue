<template>
  <div>
      <add-text style="position:absolute;pointer-events: none" :arr="poem1"></add-text>
      <audio :src="mus" class="media-audio" loop autoplay ref="MusicPlay"></audio>
      <my-button style="margin-top: 34%;margin-left: 70%;"
                 :hidden="1"
                 message="欣赏烟火" urrl="/#/hidden/firework"></my-button>
  </div>

</template>
<script setup>

import AddText from "@/components/AddText.vue";
import MyButton from "@/components/button/MyButton.vue";
import {useRouter} from "vue-router"
const router = useRouter()
const poem1 = localStorage.getItem("poem1")?.split(',')
const mus = require("")


</script>


<style scoped lang="scss">

</style>