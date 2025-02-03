<template>
  <div class="conty">
    

  <section class="row" id="landing">
    <LandingPage/>
  </section>

  <section class="row min-vh-100" id="about">
    <About/>
  </section>

  <section class="row min-vh-100" id="resume">
    <Resume />
  </section>
  
  <section class="row  min-vh-100" id="projects">
    <Projects/>
  </section>

  
  <section class="row min-vh-100" id="contact">
    <Contact/>
  </section>

  <section class="row" id="">
    <FooterComp/>
  </section>
</div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue'
import About from '@/components/AboutComp.vue'
import Projects from '@/components/ProjectsComp.vue'
import Contact from '@/components/ContactPage.vue'
import Resume from '@/components/ResumeComp.vue'
import FooterComp from '@/components/FooterComp.vue'


export default {
  name: 'HomeView',

  components: {
    LandingPage,
    About,
    Projects,
    Resume,
    Contact,
    FooterComp,
  }
}
</script>
