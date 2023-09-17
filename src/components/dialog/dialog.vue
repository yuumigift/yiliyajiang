<template>
  <!--1.首先，弹窗页面中要有el-dialog组件即弹窗组件，我们把弹窗中的内容放在el-dialog组件中-->
  <!--2.设置:visible.sync属性，动态绑定一个布尔值，通过这个属性来控制弹窗是否弹出-->
    <div :hidden="hidden" class="register" style="z-index: 1;height: 400px;width: 700px;">
        <div style="color: #1e1e1f">注册</div>
        <my-search width="80%" style="margin-top: 30px;" placeholder="请输入昵称" v-model="name"></my-search>
        <my-search width="80%" style="margin-top: 10px;" placeholder="请输入用户名" v-model="username"></my-search>
        <my-search width="80%" style="margin-top: 10px;margin-bottom: 10px;" placeholder="请输入密码" v-model="password" type="password"></my-search>
        <my-search width="80%" placeholder="请确认密码" v-model="passwordConfirm" type="password"></my-search>
        <div style="margin-top: 5%;">
            <green-button @click="register" style="float:left;margin-left: 20%;" message="确定注册"></green-button>
            <green-button @click="cancel" message="取  消"></green-button>
        </div>
    </div>
</template>

<script>
import MySearch from "@/components/search/MySearch.vue";
import MyButton from "@/components/button/MyButton.vue";
import GreenButton from "@/components/button/GreenButton.vue";
import axios, {post} from "axios";

export default {
    name: "dialogComponent",
    components: {GreenButton, MyButton, MySearch},
    props:{
        hidden:{
            default:true,
            type:Boolean
        }
    },
    data(){
        return{
            name:'',
            username:'',
            password:'',
            passwordConfirm:''
        }
    },

    methods:{
        cancel(){
            this.$emit('event',true)
        },
        register(){
            const registerData = {
                name:this.name,
                username:this.username,
                password:this.password,
            }
            if (this.password !== this.passwordConfirm) alert("两次输入的密码不一致！")
            else if (this.username === null || this.username === '' || this.password === null || this.password === '') alert("用户名或密码不能为空")
            else if (this.name === '' || this.name === null) alert("昵称不能为空！")
            else {
                axios.post("/api/register",registerData).then(resp=>{
                    const data = resp.data
                    if (data.code === 1){
                        alert("注册成功！,您是本站的第" + data.count + "位用户")
                        this.cancel()
                    }else alert(data.message)
                })
            }
        }
    }
}
</script>
<style>
.register{
    background-image: url("../../assets/images/四糸乃.jpg");
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
}
</style>
