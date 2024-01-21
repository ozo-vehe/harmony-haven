import { defineStore } from 'pinia'

export const useJobs = defineStore('jobs', {
  state: () => ({
    jobs: [],
  }),
  actions: {
    async fetchUrlData() {
      const API_KEY = '8b68c3e1-14df-4ea3-94be-6257db650be4';
      const req = await fetch(`https://api.crackeddevs.com/api/get-jobs?limit=12`, {
        headers: {
          'api-key': `${API_KEY}`, // API KEY HERE
        },
      });
      const jobs = await req.json()
      this.jobs = jobs
    },

    async searchForCategory(category, search) {
      console.log("getting")
      let url, API_KEY;
      switch (category) {
        case 'job':
          url = `https://api.crackeddevs.com/api/get-jobs?limit=10&search=${search}`;
          API_KEY = '8b68c3e1-14df-4ea3-94be-6257db650be4';
          break;
        case 'banks':
          url = `https://api.crackeddevs.com/api/get-jobs?limit=10&search=${search}`;
          API_KEY = '8b68c3e1-14df-4ea3-94be-6257db650be4';
          break;
        default:
          url = `https://api.crackeddevs.com/api/get-jobs?limit=10&search=${search}`;
          API_KEY = '8b68c3e1-14df-4ea3-94be-6257db650be4';
          break;
      }
      console.log('requesting')
      const req = await fetch(url, {
        headers: {
          'api-key': `${API_KEY}`, // API KEY HERE
        },
      });
      console.log('requested')
      const jobs = await req.json()
      console.log(jobs);
      this.jobs = jobs
    },

    getJob(id) {
      return this.jobs.find(job => job.id === Number(id))
    }
  }
})
