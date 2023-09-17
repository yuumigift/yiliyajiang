<template>
  <div class="magic-card-box">
    <div  class="btn" :style="{
            height:height,
        }">
      <a :class="{active:isActive}" :href=urrl>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <p><beautiful-button :style="{width: width}"></beautiful-button></p>
      </a>
    </div>
  </div>
</template>

<script>
import BeautifulButton from "@/components/button/BeautifulButton.vue";

export default {
  name: "DoubleButton",
  components: {BeautifulButton},
  data() {
    return {
      password:'test'
    }
  },
  props:{
    isActive:{
      default:false,
      type:Boolean
    },
    height:{
      type:String
    },
    urrl:{
      type:String
    },
    message:{
      type:String
    },
    width:{
      type:String
    }
  },

}
</script>

<style scoped lang="scss">

@import url(https://fonts.googleapis.com/css?family=Lato:400,900|Montez);

$buttonBackground: #2c3e50;
$buttonColor: rgba(255,255,255,1);



.magic-card-box{
  .btn{
    display: flex;
    flex-direction: row;
    font-family: ysbth;

    a{
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

    a:hover{
      background: #03e9f4;
      color: #ffffff;
      box-shadow: 0 0 5px #03e9f4,
      0 0 25px #03e9f4,
      0 0 50px #03e9f4,
      0 0 200px #03e9f4;
      -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
    }

    a:nth-child(1){
      filter: hue-rotate(100deg);
    }
    .active {
      background: #03e9f4;
      color: #ffffff;
      box-shadow: 0 0 5px #03e9f4,
      0 0 25px #03e9f4,
      0 0 50px #03e9f4,
      0 0 200px #03e9f4;
      -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
    }
  }


}


</style>