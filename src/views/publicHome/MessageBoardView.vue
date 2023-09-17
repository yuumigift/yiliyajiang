<template>
    <audio :src="music" class="media-audio" loop ref="MusicPlay"></audio>
    <div style="font-family: ysbth;" class="treasure">
        <ul style="list-style: none;margin-top: -20px;">
            <li v-for="(label, index) in labels" style="width: auto; ">
                <h4 style="margin-bottom:-1px;margin-top: 10px;">
                    {{label.two}}
                </h4>
                <div style="">
                    <my-label font-size="8" :message="label.one"></my-label>
                </div>
                <div>
                    {{label.time}}
                </div>
            </li>
        </ul>
        <div style="position: absolute;margin-top: 55%;margin-left: 31%;" >
            <pagination @onPageChange="onPageChange"></pagination>
        </div>
        <div style="position:absolute;margin-top: 50%;margin-left: 22%;width: 100%;">
            <my-search @event="event" placeholder="留言框" v-model="message"></my-search>
            <div class="search-bar" :class="{'search-bar-change-search': isChangeSearch}"  style="height: 1px;margin-left: 10%">
                <my-button height="55px" @click="submit" style="margin-left: 100%;margin-top: -49px;" message="➡"></my-button>
            </div>
        </div>
    </div>
</template>
<script>
import MySearch from "@/components/search/MySearch.vue";
import axios, {post} from "axios";
import MyButton from "@/components/button/MyButton.vue";
import store from "@/store";
import headerComponent from "@/components/HeaderComponent.vue";
import Pagination from "@/components/Pagination/PaginationComponent.vue";
import MyLabel from "@/components/lable/MyLabel.vue";
export default {
    components: {MyLabel, Pagination, MyButton, MySearch},
    data() {
        return{
            labels:[],
            username: '',
            msg:[],
            music:require("../../assets/audios/桜华月想.mp3"),
            isChangeSearch:false,
            message:'',
            page:1,
        }
    },
    mounted(){
        this.msgData(this.page);
        setTimeout(()=>{
            this.musicPlay()
        },5000)
    },
    methods: {
        onPageChange(page){
            this.page = page
            this.labels = []
            this.msgData(this.page)
        },
        submit() {
            const data = {
                username:localStorage.getItem("username"),
                msg:this.message,
                tree: 0,
                fPid: 0,
        };
            if (this.message.length >=10){
                axios.post("/api/submitMsg",data).then(resp=>{
                    alert(resp.data)
                })
            }else {
                alert("信息不能少于10个字！")
            }
            location.reload()
        },
        event(data){
            this.isChangeSearch = data
        },
        musicPlay() {
            this.$refs.MusicPlay.volume = 0.15
            this.$refs.MusicPlay.play();
            this.musicTF = false
            this.show = false;
        },
        msgData(page){
            const data = {
                offset:page
            }
            axios.post("/api/selectMsgById",data).then(resp=>{
                this.msg = resp.data.list;
                for (let i = 0; i < 5; i++) {
                    this.addRow(i);
                }
            })
        },
        addRow(i){
            this.labels.push({
                two:this.msg[i].name + ":",
                one:this.msg[i].msg,
                time:"留言时间：" + (this.msg[i].createTime==null?"空":this.msg[i].createTime)
            })
        },
    }
}
</script>


<style scoped lang="scss">
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
.search-bar {
    height: 40px;
    display: flex;
    width: 100%;
    max-width: 400px;
    padding-left: 16px;
    border-radius: 4px;
    border: none;
}

.search-bar-change-search{
    max-width: 600px;
    margin: auto;
    transition: 0.4s;
    box-shadow: 0 0 0 1px rgba(113 119 144 / 25%);
    padding-left: 0;
}


</style>
