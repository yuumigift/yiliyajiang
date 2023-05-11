<template>
<mouse-star-follow></mouse-star-follow>
    <my-button message="测试" style="position: absolute"></my-button>
</template>
<script>
import MouseStarFollow from "@/views/star/StarView.vue";
import MyButton from "@/components/button/MyButton.vue";

export default {
    components: {MyButton, MouseStarFollow}

}
</script>
<style scoped lang="scss">

</style>