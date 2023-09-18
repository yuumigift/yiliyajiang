<template>
  <div>
    <section>
      <div class="input-group">
        <input :style="{ width }" class="input" autocomplete="off" name="text" :type="type" v-model="modelValue" required="" />
        <label style="" class="user-label">{{ placeholder }}</label>
      </div>
    </section>
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  placeholder: {
    default: "",
  },
  width: {
    default: "",
  },
  type: {
    default: "text",
  },
  modelValue: {
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const modelValue = computed({
  set(value) {
    emit("update:modelValue", value);
  },
  get() {
    return props.modelValue;
  },
});
</script>
<style scoped lang="scss">
.input-group {
  position: relative;
}

.input {
  border: 1px solid rgb(255, 105, 180);
  padding: 1rem;
  font-size: 1rem;
  color: black;
  background-color: white;
}

.user-label {
  font-family: ysbth;
  position: absolute;
  left: 15px;
  color: rgb(131, 131, 237);

  pointer-events: none;
  transform: translateY(1rem);
  transition: 350ms;
}

.input:focus,
input:valid {
  outline: none;
  --angle: 0deg;
  border-bottom: 1px solid;
  border-image: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1;
  animation: 3s rotate9234 linear infinite;
}

@keyframes rotate9234 {
  to {
    --angle: 360deg;
  }
}

@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.input:focus ~ label,
input:valid ~ label {
  transform: translateY(335%) scale(1);
  padding: 0 0.2em;
  color: #2196f3;
}
</style>
