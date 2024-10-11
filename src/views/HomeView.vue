<template>
  <div class="conty">
  <section class="row" id="landing">
    <LandingPage/>
  </section>

  <section class="row" id="about">
    <About/>
  </section>

  <section class="row" id="projects">
    <Projects/>
  </section>

  <section class="row">
    <Resume />
  </section>
  
  <section class="row">
    <Contact/>
  </section>
</div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue'
import About from '@/components/AboutComp.vue'
import Projects from '@/components/ProjectsComp.vue'
import Contact from '@/components/ContactPage.vue'
import Resume from '@/components/ResumeComp.vue'


export default {
  name: 'HomeView',

  components: {
    LandingPage,
    About,
    Projects,
    Resume,
    Contact
  }
}
</script>
