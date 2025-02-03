<template>
  <div class="cont">
    <NavBar />
  <main>
    <router-view/>
  </main>
  </div>

</template>

<script setup>
import Aos from 'aos';
import 'aos/dist/aos.css';
import NavBar from './components/NavBar.vue';
import { onMounted } from 'vue';

onMounted(() =>{
  Aos.init(); // Initialize AOS when the component is mounted
})


</script>

<style src="./assets/css/style.css">


</style>
