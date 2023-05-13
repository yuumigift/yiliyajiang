<template>
  <add-text :arr="arr"></add-text>
</template>
<script>
import AddText from "@/components/AddText.vue";

export default {
  components: { AddText },
  data() {
    return {
      arr: ["sdkljflsjkdf","lskdfjflksjdfljksdf"],
    };
  },
  mounted() {
    this.arr = ["sdklajflajs", "sfkldajdslf"];
    setTimeout(() => {
      this.arr = ["asdfsdfsdfsdfsdf", "sfkldasdfsdfsdfsdfsdfsdfsdfjdslf"];
    }, 1000);
    // this.arr = localStorage.getItem("poem")
  },
};
</script>
<style scoped lang="scss"></style>
