<template>
  <div>
    <div style="margin-left: 550px;position:absolute;margin-top: 300px;">
      <my-button style="width: 80px" @mouseover="change(1)" @mouseout="change(2)" :message="message" urrl="/#/hidden/dongfangProject"></my-button>
    </div>
    <div style="width: 18%;position: absolute;margin-top: 150px;margin-left: 100px;" >
      <video autoplay ref="MusicPlay" >
        <source src="@/assets/mp4/初音4.mp4" type="video/mp4">
      </video>
    </div>
    <div style="width: 18%;position: absolute;margin-top: 150px;margin-left: 900px;" >
      <video autoplay ref="MusicPlay" muted>
        <source src="@/assets/mp4/初音3.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>
<script>
import MyButton from "@/components/button/MyButton.vue";

export default {
  name: "HappyBirthdayView",
  components: {MyButton},
  data() {
    return {
      message:"end"
    }
  },
  methods:{
    change(x){
      if (x === 1){
        this.message = "谢谢观看"
      }else {
        this.message = "END"
      }

    }
  }
}
</script>
<style scoped lang="scss">

</style>
