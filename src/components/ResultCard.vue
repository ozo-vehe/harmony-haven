<script setup>  
  defineProps({
    job: Object,
  })

  const job_type = (type) => {
    const edited_type = type.split("_").join("-");
    return edited_type;
  }
</script>

<template>
  <section class="card bg-gradient-to-tr from-[#fff6e6] to-[#fff] flex flex-wrap gap-5 w-[400px] p-6 rounded-lg border-2 border-[#f1f2f499]">
    <div class="card_details w-full">
      <h3 class="font-bold text-[16px] leading-[1.2] mb-2">{{ job.title }}</h3>
      <p class="w-full">
        <span class="uppercase text-[12px] bg-[#e7f6ea] text-[#0ba02c] px-2 py-1 rounded-sm">
          {{ job.job_type ? job_type(job.job_type) : 'remote' }}
        </span>
        
        <span class="job_salary text-gray-500 text-[12px] ml-2">
          <span v-if="job.min_salary_usd || job.max_salary_usd">Salary </span>
          <span v-if="job.min_salary_usd">${{ job.min_salary_usd }}</span> <span v-if="job.max_salary_usd">- ${{ job.max_salary_usd }}</span>
        </span>
      </p>      
    </div>

    <div class="company_details flex gap-4">
        <img class="w-12 h-12 rounded-full" :src="job.image_url" alt="Company image">
        <div class="company_name">
          <p class="mb-1 font-[600]">{{ job.company }}</p>
          <RouterLink :to="{ name: 'job', params: {id: job.id} }" class="text-[12px] capitalize bg-[#e7f6ea] text-[#0ba02c] px-3 py-2 rounded-[3px] hover:bg-[#0ba02c] hover:text-[#e7f6ea] transition-all duration-300">view details</RouterLink>
        </div>
      </div>
  </section>
</template>

<style scoped>
/* .search_bar_container {
  background: #f1f2f499;
} */
</style>
