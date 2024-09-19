<template>
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

  </section>

  <section class="row">

  </section>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue'
import About from '@/components/AboutComp.vue'
import Projects from '@/components/ProjectsComp.vue'


export default {
  name: 'HomeView',

  components: {
    LandingPage,
    About,
    Projects
  }
}
</script>
