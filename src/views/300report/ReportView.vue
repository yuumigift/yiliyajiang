<template>
<mouse-star-follow></mouse-star-follow>
        <my-button message="搜索" style="position: absolute"></my-button>
        <my-input style="position: absolute;margin-top: 10%;" width="100px"></my-input>
</template>
<script>
import MouseStarFollow from "@/views/star/StarView.vue";
import MyButton from "@/components/button/MyButton.vue";
import MyInput from "@/components/search/MyInput.vue";

export default {
    components: {MyInput, MyButton, MouseStarFollow}

}
</script>
<style scoped lang="scss">

</style>