<template>
  <div>
    <div v-for="(item,index) in arr">登录记录：{{item}}</div>
    <div v-for="(item,index) in arr1">登录页面：{{item}}</div>
    <div>1是点击2是lv</div>
    <div style="display: flex">
      <div style="margin-right: -50px">
        <my-input v-model="password"></my-input>
      </div>
      <div style="margin-top: -10px;">
        <my-button message="删除记录" @click="deleteAll"></my-button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import MyButton from "@/components/button/MyButton.vue";
import MyInput from "@/components/search/MyInput.vue";

export default {
  components: {MyInput, MyButton},
  data(){
    return{
      arr:[],
      arr1:[],
      password:''
    }
  },
  mounted() {
    axios.post("/api/log").then((resp)=>{
      this.arr = resp.data
    })
    axios.post("/api/pageLog").then((res)=>{
      this.arr1 = res.data
    })
  },
  methods:{
    deleteAll(){
      let data = {
        id:this.password
      }
      axios.post("/api/deletePageLog",data).then((res)=>{
        alert(res.data)
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
