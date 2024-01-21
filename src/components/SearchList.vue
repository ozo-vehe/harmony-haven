<script setup>
import ResultCard from '@/components/ResultCard.vue';
import { useJobs } from '@/stores/jobs';
import { storeToRefs } from 'pinia';

const jobStore = useJobs();

const { jobs } = storeToRefs(jobStore);
</script>

<template>
  <section class="search_section flex gap-x-8 gap-y-4 flex-wrap items-center justify-center px-10 py-12">
    <h2 class="font-bold text-[32px]">Available Jobs</h2>
    <div class="job_cards flex flex-wrap gap-6 items-start justify-center">
      <template v-for="(job, index) in jobs" :key="index">
        <ResultCard :job="job" />
      </template>
    </div>
  </section>
</template>

<style scoped>
</style>
