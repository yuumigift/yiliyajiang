<template>
    <add-text :arr="arr"></add-text>
</template>
<script>
import AddText from "@/components/AddText.vue";

export default {
    components: {AddText},
    data(){
        return{
            arr:[
            ]
        }
    },
    mounted() {
        // this.arr = localStorage.getItem("poem")
    }

}
</script>
<style scoped lang="scss">

</style>