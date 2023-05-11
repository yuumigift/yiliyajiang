<template>
    <div class="search-bar" :class="{'search-bar-change-search': isChangeSearch}" style="margin-left: 10%">
        <input :style="{
            width:width,
            height:height
        }"
               style="color: black;font-family: ysbth"
               class="text"
               :type="type"
               :placeholder="placeholder"
               :value="modelValue"
               @input="input">
    </div>
</template>
<script>

import {reactive, toRefs} from "vue";
import {useRoute, useRouter} from "vue-router";

export default {
    name:"MyInput",
    data(){
        return{
            isChangeSearch:false
        }
    },
    props:{
        height:{
            type:String
        },
        width:{
            type:String
        },
        type:{
            type:String
        },
        modelValue:{
            type:String
        },
        placeholder:{
            type:String
        }
    },
    setup(props, ctx) {
        const data = reactive({
            modelValue: "",
        });
        const input = (e) => {
            ctx.emit("update:modelValue", e.target.value);
        };
        return { ...toRefs(data), input };
    },
    methods:{
    }
}
</script>
<style scoped lang="scss">
.search-bar {
  height: 40px;
  display: flex;
  width: 100%;
  max-width: 400px;
  padding-left: 16px;
  border-radius: 4px;
  border: none;
  input {
    width: 50%;
    height: 100%;
    border: none;
    outline: none;
    background-color: white;
    border-radius: 4px;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    font-weight: 500;
    background-size: 14px;
    background-repeat: no-repeat;
    background-position: 16px 48%;
    &::placeholder {
      font-family: "Poppins", sans-serif;
      color: rgb(131, 131, 237);
      font-size: 15px;
      font-weight: 500;
    }
  }
  input:focus{
    border: 2px solid rgb(192, 134, 192);
  }

}
</style>