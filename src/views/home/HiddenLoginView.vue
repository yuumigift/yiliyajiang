<template>
  <!--父级路由和子级路由的选择-->
    <router-view v-if="$route.path !== '/treasure'"></router-view>

    <div class="treasure">
        <div style="margin-top: 22%;margin-left: 38%;">
            <div class="aaa">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p class="text" style="font-size: 20px">{{ m1 }}</p>
            </div>
        </div>
        <div style="margin-left: 32%;">
            <my-search width="50%" type="password" placeholder="请输入通行口令" v-model="password"></my-search>
        </div>
        <div style="margin-left: 41%;font-size: 20px">
            <my-button
                    class="ass"
                    style="cursor: pointer;width: 28%;"
                    @click="checkPassword"
                    message="Let's to Login"></my-button>
        </div>
        <div style="margin-top: 15%;font-size: 17px">
            <green-label message="进入主页后请等待一分钟 加载有点慢QAQ"></green-label>
        </div>
    </div>
</template>

<script>
import ContentWrapper from '@/components/treasure/ContentWrapper.vue';
import LineCard from '@/components/treasure/LineCard.vue';
import BlockCard from '@/components/treasure/BlockCard.vue';
import MyButton from "@/components/button/MyButton.vue";
import GreenButton from "@/components/button/GreenButton.vue";
import MyLabel from "@/components/lable/MyLabel.vue";
import GreenLabel from "@/components/lable/GreenLabel.vue";
import MySearch from "@/components/search/MySearch.vue";
import router from "@/router";
import {onMounted, reactive} from "vue";
import axios, {post} from "axios";
import store from "@/store";

export default {
    components: {MySearch, GreenLabel, MyLabel, GreenButton, MyButton, ContentWrapper, LineCard, BlockCard},
    data(){
        return {
            m1:'没有权限禁止偷看！',
            password:'',
        }
    },
    mounted(){
        this.m1 = store.state.message.m1
    },
    methods:{
        checkPassword(){
            let user = {
                name:this.password
            }
            axios.post("/api/hiddenLogin",user).then(resp=>{
                this.$router.replace(resp.data)
            })
        }
    }
}
</script>

<style lang="scss" scoped>

.treasure {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: #fff;
  padding: 20px 40px;
  height: 100%;
  overflow: auto;
  background-color: rgba(16 18 27 / 10%);
  @media screen and (max-width: 510px) {
    padding: 20px;
  }
  font-family: ysbth;

}
.aaa{
  position: relative;
  display: inline-block;
  padding: 10px;
  color: #03e9f4;
  text-decoration: none;
  //text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 2px;
  overflow: hidden;
  margin: 10px;


  span{
    position: absolute;
    display: block;
  }
  // 上
  span:nth-child(1){
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,transparent,#03e9f4);
    animation: animate1 1s linear infinite;

    @keyframes animate1{
      0%{
        left: -100%;
      }
      50%,100%{
        left: 100%;
      }
    }
  }
  // 右
  span:nth-child(2){
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg,transparent,#03e9f4);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;

    @keyframes animate2{
      0%{
        top: -100%;
      }
      50%,100%{
        top: 100%;
      }
    }
  }
  // 下
  span:nth-child(3){
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg,transparent,#03e9f4);
    animation: animate3 1s linear infinite;
    animation-delay: 0.50s;

    @keyframes animate3{
      0%{
        right: -100%;
      }
      50%,100%{
        right: 100%;
      }
    }
  }
  // 左
  span:nth-child(4){
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg,transparent,#03e9f4);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;

    @keyframes animate4{
      0%{
        bottom: -100%;
      }
      50%,100%{
        bottom: 100%;
      }
    }
  }


}

.aaa:hover{
  background: #03e9f4;
  color: #ffffff;
  box-shadow: 0 0 5px #03e9f4,
  0 0 25px #03e9f4,
  0 0 50px #03e9f4,
  0 0 200px #03e9f4;
  -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
}

.aaa:nth-child(1){
  filter: hue-rotate(100deg);
}

.hover-slide-right{
  &::before {
    top: 0; bottom: 0; left: 0;
    height: 100%; width: 0%;
  }
  &:hover::before {
    width: 100%;
  }
}

</style>>

