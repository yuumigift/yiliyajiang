<template>
        <my-input v-model="param.RoleName" style="position: absolute;margin-top: 1%;margin-left: 35%;" width="100px"></my-input>
        <my-button message="搜索" @click="search" style="position: absolute;margin-left: 49%;margin-top: 0.1%;"></my-button>
  <div style="float: left">
    <div style=";margin-top: 10%;" v-for="(item,index) in arr">{{ arr[index].heroName }}，{{arr[index].Players[0].Result === 1?"胜利":"失败"}}，竞技场，时间{{UsedTime}}分钟,kda{{arr[index].Players[0].KillPlayer}}/{{arr[index].Players[0].Death}}/{{arr[index].Players[0].Assist}}金钱：{{arr[index].Players[0].TotalMoney}}小兵击杀：{{arr[index].Players[0].KillUnit}}拆塔数：{{arr[index].Players[0].DestoryTower}}竞技力：{{arr[index].Players[0].FV}}
      技能最终出装日期
    </div>
  </div>

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
                    arr:[],
                    dict:[],
                    param:{
                            RoleName:'',
                            Guid:0,
                            AccountID:0
                    },
                    /*playData:{
                            KillPlayer:0,
                            Death:0,
                            Assist:0,
                            KillUnit:0,
                            TotalMoney:0,
                            DestoryTower:0,
                            FV:0,
                            Result:0,
                            HeroID:0
                    },*/
                    UsedTime:0,
                    heroName:''
            }
        },
        mounted() {
            axios.post("/api/selectHeroDict").then(res => {
                    this.dict = res.data
            })
        },
        methods:{
            march(id,x){
                    for (let i = 0; i < this.dict.length; i++) {
                            if (id === this.dict[i].heroId){
                                    this.arr[x].heroName = this.dict[i].heroName
                            }
                    }
            },
            search(){
                    axios.post("/jump/battle/searchNormal?type=h5",qs.stringify(this.param)).then(resp =>{
                            const data = {
                                    RoleID:resp.data.data.RoleID,
                                    MatchType:1,
                                    searchIndex:1
                            }
                            axios.post("/jump/battle/searchMatchs?type=h5",qs.stringify(data)).then(res => {
                                    this.UsedTime = (res.data.data.Matchs.Matchs[0].UsedTime / 60).toFixed(0)
                                    this.arr = res.data.data.Matchs.Matchs
                              for (let i = 0; i < this.arr.length; i++) {
                                console.log(this.arr[i].Players[0]);
                                this.march(this.arr[i].Players[0].HeroID + "",i)
                              }

                            })
                    })
            }
        }

}
</script>
<style scoped lang="scss">

</style>
