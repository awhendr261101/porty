<template>
  <div class="cont">
  <NavBar/>
  <main>
    <router-view/>
  </main>
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'MainApp',
  components: {
    NavBar,
  }
}

</script>

<style src="./assets/css/style.css">


</style>
