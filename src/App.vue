<script setup lang="ts">
import { reactive } from "vue";
import AppLayout from "./layout/AppLayout.vue";
import PrimaryButton from "./components/PrimaryButton.vue";
import Counter from "./counters/Counter.vue";

const counters = reactive<Array<{ name: string; value: number }>>([]);

const addCounter = () => counters.push({ value: 0, name: "" });
</script>

<template>
  <AppLayout>
    <div class="block">
      <Counter v-for="counter in counters" :counter="counter" />
    </div>
    <div class="flex justify-center">
      <PrimaryButton @click="addCounter">Add Counter</PrimaryButton>
    </div>
  </AppLayout>
</template>
