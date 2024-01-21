<script setup>
import header_img from '../assets/image/Illustration.png'
</script>

<template>
  <header class="hero_section flex gap-x-8 gap-y-4 flex-wrap items-center justify-center h-screen px-10">
    <div class="header_text w-[600px]">
      <h1 class="text-[56px] leading-[60px] font-[700] capitalize mb-6">
        Welcome to Harmony Haven Service Hub. <br />
        <span class="text-[#0066ffdc] text-[40px] font-[500]">Discover, Connect, and Thrive</span>
      </h1>
      <p class="text-[20px]">
        Find essential services, jobs, and businesses. Whether you're looking for healthcare, jobs, local businesses, Harmony Haven is your go-to guide for everything.
      </p>

    </div>

    <div class="header_image w-[600px] h-[400px]">
      <img :src="header_img" alt="Header image" class="w-full h-full object-contain">
    </div>
  </header>
</template>

<style scoped>
</style>
