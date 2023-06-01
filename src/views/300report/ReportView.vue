<template>
        <my-input v-model="param.RoleName" style="position: absolute;margin-top: 1%;margin-left: 35%;" width="100px"></my-input>
        <my-button message="搜索" @click="search" style="position: absolute;margin-left: 49%;margin-top: 0.1%;"></my-button>
</template>
<script>
import MouseStarFollow from "@/views/star/StarView.vue";
import MyButton from "@/components/button/MyButton.vue";
import MyInput from "@/components/search/MyInput.vue";
import axios from "axios";
import qs from "qs";

export default {
    components: {MyInput, MyButton, MouseStarFollow},
        data(){
            return {
                    param:{
                            RoleName:'',
                            Guid:0,
                            AccountID:0
                    }
            }
        },
        methods:{
            search(){
                    axios.post("/jump/battle/searchNormal?type=h5",qs.stringify(this.param)).then(resp =>{
                            resp.data.RoleId;
                            axios.post();
                    })
            }
        }

}
</script>
<style scoped lang="scss">

</style>