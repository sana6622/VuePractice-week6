<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
<script>
console.log(import.meta.env);
const { VITE_URL } = import.meta.env;
</script>
