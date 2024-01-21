<script setup>
import { useJobs } from '@/stores/jobs';
import { useRoute } from 'vue-router';
import { ref, onBeforeMount } from 'vue';
import MarkdownRenderer from '../components/MarkdownRenderer.vue'

const jobStore = useJobs();
const { getJob } = jobStore;
const route = useRoute();

const job = ref(null);
// console.log(getJob(route.params.id));
onBeforeMount(() => {
  job.value = getJob(route.params.id);
})

const job_type = (type) => {
  const edited_type = type.split("_").join("-");
  return edited_type;
}

</script>

<template>
  <section class="job_details px-10 py-12">
    <h1 class="w-full text-[40px] font-bold mb-4">Job Details</h1>
    <div class="company_details flex flex-wrap gap-4 w-full">
      <div class="flex gap-4 w-full">
        <img class="w-40 h-40 rounded-full" :src="job.image_url" alt="Company image">
        <div class="company_name flex flex-col items-start justify-center w-full">
          <h3 class="font-bold flex justify-between items-center text-[32px] leading-[1.2] mb-2 w-full">
            {{ job.title }}
            <a :href="job.url" target="_blank"
              class="text-[16px] capitalize bg-[#e7f6ea] text-[#0ba02c] px-3 py-2 rounded-[3px] hover:bg-[#0ba02c] hover:text-[#e7f6ea] transition-all duration-300">apply
              here
            </a>
          </h3>
          <p class="mb-2 font-[600] text-[24px]">{{ job.company }}</p>
          <p class=" mb-4">
            <span class="uppercase text-[16px] bg-[#e7f6ea] text-[#0ba02c] p-2 rounded-[3px]">
              {{ job.job_type ? job_type(job.job_type) : 'remote' }}
            </span>

            <span class="job_salary text-gray-500 text-[12px] ml-2">
              <span v-if="job.min_salary_usd || job.max_salary_usd">Salary </span>
              <span v-if="job.min_salary_usd">${{ job.min_salary_usd }}</span> <span v-if="job.max_salary_usd">- ${{
                job.max_salary_usd }}</span>
            </span>
          </p>
        </div>
      </div>

      <div class="job_description mt-2 leading-[1.5]">
        <MarkdownRenderer :source="job.description" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* .search_bar_container {
  background: #f1f2f499;
} */
</style>
