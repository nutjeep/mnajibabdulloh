<template>
  <header id="header" class="flex justify-center items-center h-[50vh] bg-black text-white">
    <div>
      <h1 class="font-chakra text-center tracking-widest uppercase">{{ header_title }}</h1> 
      <router-link to="/" class="text-center font-light">&#10094; Back to Home</router-link>
    </div>
  </header>
</template>

<script setup>

defineProps({
  header_title: {
    type: String,
    required: true
  }
});
</script>