<template>
    <article class="c__pink_input" :style="{ width: `${width}px` }">
        <div class="input" :class="{ is_focus }" :style="getInputStyle()">
            <input :placeholder="placeholder" :type="type" @focusin="handleFocusIn" @focusout="handleFocusOut" v-model="value" />
        </div>
    </article>
</template>

<script setup>
import { ref, watchEffect } from "vue";

// props
const props = defineProps({
    width: {
        default: 200,
    },
    // 获得焦点成长宽度
    grow_width: {
        default: 60,
    },
    placeholder: {
        default: "",
    },
    type: {
        default: "text",
    },
    modelValue: {
        default: "",
    },
});

// emit
const emit = defineEmits(["update:modelValue"]);

// states
const is_focus = ref(false);
const value = ref(props.modelValue);

// methods
const handleFocusIn = () => {
    is_focus.value = true;
};
const handleFocusOut = () => {
    is_focus.value = false;
};
const getInputStyle = () => {
    return {
        width: `${is_focus.value ? +props.width + +props.grow_width : +props.width}px`,
    };
};

// watchers
watchEffect(() => {
    emit("update:modelValue", value.value);
});
</script>

<style lang="scss" scoped>
.c__pink_input {
    height: 40px;
    display: flex;
    justify-content: center;
}

.input {
    position: absolute;
    display: flex;
    border: solid 1px #ffbdd3;
    background: #ffbdd333;
    color: #fff;
    border-radius: 8px;
    padding: 0 12px;
    font-size: 16px;
    transition: 0.3s;

    & > input {
        height: 40px;
        width: 100%;
        background: #0000;
        border: none;

        &::placeholder {
            color: #fffa;
        }
    }
    &.is_focus {
        box-shadow: #ffbdd3 0 0 20px;
        background: #ffbdd366;
    }
}
</style>
