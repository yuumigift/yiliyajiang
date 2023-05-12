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

    }

}
</script>
<style scoped lang="scss">

</style>