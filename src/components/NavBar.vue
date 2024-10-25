<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top min-vw-100">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            <img src="https://awhendr261101.github.io/allImages/images/surveycorps.jpg" alt="logo" loading="lazy">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#landing" exact-active-class="active">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about" exact-active-class="active">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects" exact-active-class="active">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#resume" exact-active-class="active">Resume</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact" exact-active-class="active">Contact Me</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    
</template>

<script setup>



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





</style>