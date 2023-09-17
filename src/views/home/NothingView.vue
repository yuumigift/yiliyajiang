<template>
  <div class="mmm">
    <my-button @click="musicPlay" style="margin-left: 490px;margin-top: 350px;position: absolute" message="我亲自唱的生日歌"></my-button>
    <my-label style="margin-top: 200px;margin-left: 450px ;" message="有什么想对我说的吗"></my-label>
    <audio :src="mus" class="media-audio" ref="MusicPlay"></audio>
    <audio :src="aaa" loop autoplay></audio>
    <div style="float: left;position:absolute;display:flex;margin-left: 420px;">
      <my-input width="200px" v-model="myMsg"></my-input>
      <my-button style="margin-top: -10px;" message="➡" @click="submit"></my-button>
    </div>
    <div style="margin-top: 110px;margin-left: 190px;">
      <my-label style="margin-left: 250px;" message="你愿意回应这份期待吗"></my-label>
      <div style="display: flex;margin-left: 300px;">
        <my-button  @click="add('will')" message="我愿意"></my-button>
        <my-button @mouseover="change(1)" @mouseout="change(2)" @click="add('refuse')" :message="message.msg"></my-button>
      </div>
      <div v-show="vvv.vvv">因为唱的不好听所以就不唱了吧。。。</div>
    </div>
  </div>
</template>
<script setup>

import MyButton from "@/components/button/MyButton.vue";
import MyInput from "@/components/search/MyInput.vue";
import MyLabel from "@/components/lable/MyLabel.vue";
import axios from "axios";
import {reactive, ref} from 'vue'
import {createRouter as $router} from "vue-router";

const MusicPlay = ref(null)
const mus = "";
const aaa = require("@/assets/audios/MIMIfeat. にんじん from ロクデナシ.mp3")
let myMsg = null;
let data = reactive({
  username:localStorage.getItem("username"),
  page:"nothing",
  msg:null,
})
let message = reactive({msg:"refuse"})
let vvv = reactive({vvv: false})
const submit = () => {
  data.msg = myMsg
  axios.post("/api/insertPageLog",data).then(()=>{
    alert("发送成功！")
    data.msg = null
    myMsg = null
  })
}

const musicPlay = () => {
  MusicPlay.value.play();
  vvv.vvv = true
  data.msg = "2"
  axios.post("/api/insertPageLog",data).then(()=>{
    data.msg = null
  })
}

const add = (x) => {
  window.location.href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1215439436"
  if (x === 'will') {
    data.msg = "原谅"
  }else {
    data.msg = "不原谅"
  }

  axios.post("/api/insertPageLog",data).then(()=>{
    data.msg = null
  })
}

const change = (x) => {
  if (x === 1) {
    message.msg = "I will"
  } else {
    message.msg = "refuse"
  }
}
</script>
<style scoped lang="scss">
.mmm{
  background: url("@/assets/images/记事本背景.png");
  background-size: 100% 100%;
  display: inline-block;
  width: 100%;
}
</style>
