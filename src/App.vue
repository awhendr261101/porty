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
import axios from 'axios';

const visitorInfo = ref(null);
console.log(visitorInfo);



onMounted(() =>{
  Aos.init(); 
}),

onMounted(async () => {
    try {
        const { data } = await axios.get("https://api64.ipify.org?format=json");
        const ip = data.ip;
        const ipDetails = await axios.get(`https://ipinfo.io/${ip}/json`);
        const visitorData = {
            ip: ip,
            city: ipDetails.data.city,
            isp: ipDetails.data.isp,
            browser: navigator.userAgent,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            referrer: document.referrer || "Direct Visit",
            visitTime: new Date().toISOString(),
        };

        // const response = await axios.post("https://localhost:3050/addviewer", visitorData);
        
        // visitorInfo.value = response.data;
        console.log("Visitor logged:", visitorData);
    } catch (error) {
        console.error("Error logging visitor:", error);
    }
})


</script>

<style src="./assets/css/style.css">


</style>
