<script setup>
import { RouterView } from 'vue-router'
import { useJobs } from './stores/jobs';
import { onBeforeMount } from 'vue';

const jobStore = useJobs();
const { fetchUrlData } = jobStore;

onBeforeMount(async() => {
  await fetchUrlData();
});
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
