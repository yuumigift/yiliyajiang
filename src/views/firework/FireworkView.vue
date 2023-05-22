<template>
    <div class="c__framework">
        <div class="video">
            <video width="320" height="240" autoplay>
                <source src="http://wuwangwo.space:8081/%E5%87%BA%E5%9C%BA-%E7%94%9F%E6%97%A5%E7%83%9F%E7%81%AB.mp4" type="video/mp4" />
            </video>
        </div>
        <div class="control">
            <my-button message="前往下一站" urrl="/#/hidden/cake"></my-button>
        </div>
    </div>
</template>
<script>
import MyButton from "@/components/button/MyButton.vue";

export default {
    components: { MyButton },
    data() {
        return {
            muted: false,
        };
    },
    mounted() {},
    methods: {},
};
</script>

<style scoped lang="scss">
.c__framework {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
}
.video {
    flex: 1;
}
.control {
    position: absolute;
    right: 0;
    bottom: 0;
}
</style>
