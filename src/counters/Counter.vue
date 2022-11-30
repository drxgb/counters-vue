<script setup lang="ts">
import { reactive } from "vue";
import SecondaryButton from "../components/SecondaryButton.vue";
import InputText from "../components/InputText.vue";

const props = defineProps<{
  counter: {
    name: string;
    value: number;
  };
}>();
const counter = reactive<object>(props.counter);
</script>

<template>
  <div class="flex justify-center gap-x-4 items-center my-4">
    <InputText v-model="counter.name" />
    <SecondaryButton @click="counter.value--">-</SecondaryButton>
    <h3 class="text-3xl">{{ counter.value }}</h3>
    <SecondaryButton @click="counter.value++">+</SecondaryButton>
  </div>
</template>
