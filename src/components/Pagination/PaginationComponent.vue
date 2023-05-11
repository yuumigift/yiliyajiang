<template>
    <div style="display: flex">
        <div style="display:flex;">
            <my-button v-for="(item,index) in arr" :is-active="currentpage === index" @click="pageChange(item,index)" height="50px" :message="item"></my-button>
        </div>
        <div style="display: flex">
            <my-button height="50px" @click="jump" message="跳转"></my-button>
            <div style="display:flex;margin-left: -20px;margin-top: 13px">
                <my-input v-model="pageIndex" height="25px" width="35px"></my-input>
            </div>
            <div style="margin-top: 17px;margin-left: 11px;">
                /页
            </div>
        </div>
    </div>
</template>
<script>
import MyButton from "@/components/button/MyButton.vue";
import MySearch from "@/components/search/MySearch.vue";
import MyInput from "@/components/search/MyInput.vue";

export default {
    components: {MyInput, MySearch, MyButton},
    name:"pagination",
    data(){
        return{
            currentpage:0,
            arr:[1,2,3,4,5,6,7],
            pageIndex:''
        }
    },
    methods:{
        changeArr(arr){
            for (let i = 0; i < this.arr.length; i++) {
                arr[i] ++
            }
        },
        jump(){
            this.pageIndex = parseInt(this.pageIndex)
            this.arr = [1,2,3,4,5,6,7]
                if (this.pageIndex <= 7 && this.pageIndex !== ''){
                    this.$emit("onPageChange",this.pageIndex)
                    this.currentpage = this.pageIndex - 1
                }else if (this.pageIndex > Math.max.apply(null,this.arr)){
                    this.$emit("onPageChange",this.pageIndex)
                    console.log(this.pageIndex)
                    this.currentpage = 3
                    let a = this.pageIndex - 3;
                    for (let i = 0; i < 7; i++) {
                        this.arr[i] = a;
                        a++
                    }
                }
        },
        pageChange(item,index){
            if (index < 6){
                this.currentpage = index ;
                this.$emit("onPageChange",item)

            }
            if (index === 6){
                this.currentpage = index - 1;
                this.changeArr(this.arr)
                this.$emit("onPageChange",item)

            }
            if (item === Math.min.apply(null,this.arr) && item !== 1){
                for (let i = 0; i < this.arr.length; i++) {
                    this.arr[i] --
                }
                this.currentpage = index + 1;
                this.$emit("onPageChange",item)

            }
        }
    }
}
</script>

<style scoped lang="scss">







</style>