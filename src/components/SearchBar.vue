<script setup>
  import { ref } from 'vue';
  import { useJobs } from '@/stores/jobs';
  import { storeToRefs } from 'pinia';

  const jobStore = useJobs();
  const category = ref("");

  const { jobs } = storeToRefs(jobStore);
  const { searchForCategory } = jobStore

  const loading = ref(false);

  const title = ref(null);
  const location = ref(null);

  
  const findItem = async () => {
    console.log("sending");
    loading.value = true;
    if(title.value && category.value) {
      try{
        await searchForCategory(category.value, title.value);
        console.log(jobs);
      } catch (error) {
        console.log(error)
      } finally {
        loading.value = false;
      }
    }
    else {
      console.log(title);
      loading.value = false;
    }
  }

</script>

<template>
  <section class="search_bar_container bg-[#f1f2f499] flex flex-wrap gap-4 items-center justify-center py-12 px-10">
    <div class="category p-2 shadow-sm bg-white h-12 rounded overflow-hidden">
      <select class="border-none h-full text-[#18191C] outline-none" name="category" id="category" v-model.lazy="category">
        <option value="">Select category</option>
        <option value="jobs">Jobs</option>
        <option value="banks">Banks</option>
        <option value="schools">Schools</option>
        <option value="hospitals">Hospitals</option>
      </select>
    </div>
    <div class="search_bar w-[700px] h-16 py-2 pr-4 bg-white flex flex-wrap items-center rounded-md shadow-sm">

      <div class="title border-r w-[290px] h-full flex items-center pl-4 gap-2">
        <img class="w-6 h-6" src="https://img.icons8.com/ios/0066FF/50/search--v1.png" alt="search--v1"/>
        <input type="text" name="title" id="title" v-model.lazy="title" placeholder="Job Title, Keyword" class="w-full h-full pl-3 outline-none">
      </div>

      <div class="location w-[290px] border-r h-full flex items-center pl-4 gap-2">
        <img class="w-6 h-6" src="https://img.icons8.com/ios/0066FF/50/marker--v1.png" alt="marker--v1"/>
        <input type="text" name="location" id="location" v-model.lazy="location" placeholder="Location" class="w-full h-full pl-3 outline-none">
      </div>

      <div class="search_btn w-[100px] text-center h-full">
        <button class="bg-[#0066ffd1] w-full h-full text-white rounded-md hover:bg-[#0066FF] transition-all duration-300 flex items-center justify-center" @click="findItem()">
          <img v-if="loading" class="w-6 h-6 animate-spin" src="https://img.icons8.com/windows/ffffff/64/spinner-frame-1.png" alt="spinner-frame-1"/>
          <span v-else>Find</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* .search_bar_container {
  background: #f1f2f499;
} */
</style>
