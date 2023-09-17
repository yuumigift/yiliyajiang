<template>
  <div :class="['search-bar', { 'search-bar-change-search': isChangeSearch }]" style="margin-left: 10%">
    <input :style="{ width: width }"
           style="color: black;font-family: ysbth"
           class="text"
           :type="type"
           @focusin="changeStyle"
           @focusout="changeStyle"
           :placeholder="placeholder"
           v-model="modelValue"
           @input="input">
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue';

export default {
  name: 'MySearch',
  setup(props, { emit }) {
    const data = reactive({
      modelValue: '',
    });

    const input = (e) => {
      emit('update:modelValue', e.target.value);
    };

    const isChangeSearch = reactive({
      value: false,
    });

    const changeStyle = () => {
      isChangeSearch.value = !isChangeSearch.value;
      change();
    };

    const change = () => {
      emit('event', isChangeSearch.value);
    };

    return {
      ...toRefs(data),
      input,
      isChangeSearch,
      changeStyle,
      change,
    };
  },
  methods: {
    changeStyle() {
      this.isChangeSearch = !this.isChangeSearch;
      this.change();
    },
    change() {
      this.$emit('event', this.isChangeSearch);
    },
  },
};
</script>

<style scoped lang="scss">
.search-bar {
  height: 40px;
  display: flex;
  width: 100%;
  max-width: 400px;
  padding-left: 16px;
  border-radius: 4px;
  border: none;
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: #b7bbea;
    background-color: white;
    border-radius: 4px;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    font-weight: 500;
    padding: 0 20px 0 40px;

    background-size: 14px;
    background-repeat: no-repeat;
    background-position: 16px 48%;

    &::placeholder {
      font-family: "Poppins", sans-serif;
      color: rgb(131, 131, 237);
      font-size: 15px;
      font-weight: 500;
    }
  }
  input:focus {
    border: 2px solid rgb(192, 134, 192);
  }
}

.search-bar-change-search {
  max-width: 600px;
  margin: auto;
  transition: 0.4s;
  box-shadow: 0 0 0 1px rgba(113 119 144 / 25%);
  padding-left: 0;
}

.change-search {
  .header-menu,
  .header-profile {
    display: none;
  }
  .search-bar {
    max-width: 600px;
    margin: auto;
    transition: 0.4s;
    box-shadow: 0 0 0 1px rgba(113 119 144 / 25%);
    padding-left: 0;
  }
  .logo {
    margin-right: 0;
  }
}
</style>