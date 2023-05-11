<template>
    <div class="search-bar" :class="{'search-bar-change-search': isChangeSearch}" style="margin-left: 10%">
        <input :style="{
            width:width
        }"
               style="color: black;font-family: ysbth"
               class="text"
               :type="type"
               @focusin="changeStyle"
               @focusout="changeStyle"
               :placeholder="placeholder"
               :value="modelValue"
               @input="input">
    </div>
</template>
<script>

import {reactive, toRefs} from "vue";
import {useRoute, useRouter} from "vue-router";

export default {
    name:"MySearch",
    data(){
        return{
            isChangeSearch:false
        }
    },
    props:{
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
        changeStyle(){
            this.isChangeSearch = !this.isChangeSearch
            this.change()
        },
        change(){
            this.$emit('event',this.isChangeSearch)
        }
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
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: #b7bbea;
    background-color: white;
    border-radius: 4px;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    font-weight: 500;
    padding: 0 20px 0 40px;
    //box-shadow: 0 0 0 2px rgb(134 140 160 / 0%);
    //background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
    background-size: 14px;
    background-repeat: no-repeat;
    background-position: 16px 48%;
    //color: #212324;
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

.header-profile {
  display: flex;
  align-items: center;
  //text-align: center;
  padding: 0 16px 0 40px;
  margin-left: auto;
  flex-shrink: 0;

  svg {
    width: 22px;
    color: #f9fafb;
    flex-shrink: 0;
  }

  .notification {
    position: relative;
    top: 2px;
    &-number {
      position: absolute;
      background-color: #3a6df0;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      font-size: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      right: -6px;
      top: -6px;
    }
    & + svg {
      margin-left: 22px;
      @media screen and (max-width: 945px) {
        display: none;
      }
    }
  }

  .profile-img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #f9fafb;
    margin-left: 22px;
  }
}

/*输入框聚焦后，样式改变 */

.header-menu-change-search{
  display: none;
}

.search-bar-change-search{
  max-width: 600px;
  margin: auto;
  transition: 0.4s;
  box-shadow: 0 0 0 1px rgba(113 119 144 / 25%);
  padding-left: 0;
}


.change-search {
  .header-menu,
  .header-profile {
    display: none;
  }
  .search-bar {
    max-width: 600px;
    margin: auto;
    transition: 0.4s;
    box-shadow: 0 0 0 1px rgba(113 119 144 / 25%);
    padding-left: 0;
  }
  .logo {
    margin-right: 0;
  }
}
</style>