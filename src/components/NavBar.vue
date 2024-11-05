<template>
  <nav class="navbar navbar-expand-lg sticky-top min-vw-100">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">
        <img src="https://awhendr261101.github.io/allImages/images/surveycorps.jpg" alt="logo" loading="lazy">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="link in links" :key="link.id">
            <a 
              class="nav-link" 
              :class="{ active: activeLink === link.id }" 
              @click="setActiveLink(link.id)"
              :href="link.href"
              >{{ link.text }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const links = [
  { id: 'landing', text: 'Home', href: '#landing' },
  { id: 'about', text: 'About', href: '#about' },
  { id: 'resume', text: 'Education&Experience', href: '#resume' },
  { id: 'projects', text: 'Projects', href: '#projects' },
  { id: 'contact', text: 'Contact Me', href: '#contact' },
];

const activeLink = ref('');

const setActiveLink = (linkId) => {
  activeLink.value = linkId;
};

// Scroll event handler
const onScroll = () => {
  const scrollPosition = window.scrollY;

  links.forEach(link => {
    const section = document.querySelector(link.href);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      // Check if the section is in the viewport
      if (scrollPosition >= sectionTop - 10 && scrollPosition < sectionTop + sectionHeight) {
        activeLink.value = link.id; // Set the active link based on the section
      }
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped>

.navbar {


    background-color: #333 !important;
    min-height: 5rem;
    & img[alt='logo']{
        width: 4rem;
    }

    & .nav-link{
        color: white;
        padding-inline: 1.5rem !important;
        font-family: "Bowlby One", sans-serif;
        font-size: 1rem;
        color: #f3c623 !important;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 10px;
    }
    .active{
      background-color: white !important;
      color: #0f0d0d;
    }
    .nav-link:hover{
      color: #0f0d0d;
       background-color: white !important;
       transform: scale(1);
       transition: 1s;
    }

    [drop]{
        color: #0f0d0d;
    }
    [drop]:hover{
        transform: scale(1);

    }

    
}

.nav-link.active {
       background-color: white !important;
       color: #0f0d0d;
}
.nav-link:hover {
  color: #0f0d0d;
  background-color: white !important;
  transform: scale(1);
  transition: 1s;
}




</style>
