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
import { ref, onMounted } from 'vue';

const visitorInfo = ref(null);
console.log(visitorInfo);



onMounted(() =>{
  Aos.init(); 
})




</script>

<style src="./assets/css/style.css">


</style>
