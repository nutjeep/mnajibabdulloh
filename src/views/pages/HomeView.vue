<template>
  <div class="h-screen">
    <section id="hero" class="flex justify-center items-center h-screen bg-black text-white">
      <div>
        <h1 class="font-chakra text-center tracking-widest uppercase mb-2">Welcome to My Page</h1> 
        <p>Muhammad Najib 'Abdulloh | Fullstack Developer</p>
      </div>
    </section>
    <section id="about" class="grid grid-cols-2 gap-4">
      <div class="col-span-1 flex justify-center">
        <img src="../../assets/images/about-image.webp" alt="about-image" class="h-[30rem]">
      </div>
      <div class="col-span-1">
        <h2 class="font-chakra font-semibold uppercase mb-5">Who Am I ?</h2>
        <p class="mb-4">With 2+ years of experience of Fullstack Developer crafting robust, scalable web applications, creating dynamic and user-friendly web applications.</p>
        <div class="mb-8">
          <h3 class="mb-2">🧑🏻‍💻 Why Choose Me To Handle Your Project?</h3>
          <p>✅ I'm passionate about clean code, efficient performance, and delivering exceptional user experiences. I'm ready to bring your web application ideas to life.</p>
          <p>✅ Successfully satisfied clients by completing their 7+ projects</p>
        </div>
        <div class="flex gap-4">
          <template v-for="item in sosmeds" :key="item.path">
            <a :href="item.path" target="_blank" class="sosmed relative bg-black rounded-full flex justify-center items-center w-10 h-10 text-white">
              <component :is="item.icon"></component>
            </a>
          </template>
        </div>
      </div>
    </section>
    <section id="skills" class="bg-black text-white">
      <h2 class="text-center font-chakra font-semibold uppercase tracking-widest mb-5">skills</h2>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-1">
          <h3 class="font-chakra text-center uppercase mb-5">Languages</h3>
          <div class="flex justify-center gap-5">
            <span class="bg-white p-4 rounded-3xl flex justify-center items-center h-20 w-20">
              <img src="../../assets/images/js.png" alt="Javascript">
            </span>
            <span class="bg-white p-4 rounded-3xl flex justify-center items-center h-20 w-20">
              <img src="../../assets/images/php.png" alt="PHP">
            </span>
          </div>
        </div>
        <div class="col-span-1">
          <h3 class="font-chakra text-center uppercase mb-5">Frameworks</h3>
          <div class="flex justify-center gap-5">
            <span class="bg-white p-4 rounded-3xl flex justify-center items-center h-20 w-20">
              <img src="../../assets/images/laravel.png" alt="Laravel">
            </span>
            <span class="bg-white p-4 rounded-3xl flex justify-center items-center h-20 w-20">
              <img src="../../assets/images/vuejs.png" alt="Vuejs">
            </span>
          </div>
        </div>
        <div class="col-span-1">
          <h3 class="font-chakra text-center uppercase mb-5">Databases</h3>
          <div class="flex justify-center gap-5">
            <span class="bg-white p-4 rounded-3xl flex justify-center items-center h-20 w-20">
              <img src="../../assets/images/mysql.png" alt="MySql">
            </span>
            <span class="bg-white p-4 rounded-3xl flex justify-center items-center h-20 w-20">
              <img src="../../assets/images/pgsql.png" alt="PostgreSql">
            </span>
          </div>
        </div>
      </div>
    </section>
    <section id="portfolio">
      <h2>Portfolio</h2>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { BIconLinkedin, BIconGithub, BIconInstagram, BIconEnvelope } from 'bootstrap-icons-vue';
const sosmeds = ref([
  { icon: BIconLinkedin, path: 'https://www.linkedin.com/in/mnajibabdulloh/' },
  { icon: BIconGithub, path: 'https://github.com/nutjeep' },
  { icon: BIconEnvelope, path: 'mailto:anajibmuhammad@gmail.com' },
  { icon: BIconInstagram, path: 'https://www.instagram.com/abdulloh_najib/' },
]);
</script>