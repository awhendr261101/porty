<template>
    <section class="services">
        <div class="container">
            <div class="carousel-container">
                <section class="section">
                    <ul>
                        <div class="carousel-content">
                        <div class="carousel-item">
                            <img src="https://awhendr261101.github.io/allImages/images/porty/bootstrap.png" alt="Proyecto 1">
                            
                            <h4>Bootstrap</h4>
                        </div>
                        </div>
                    </ul>
                        
                    <ul>
                        <div class="carousel-content">
                        <div class="carousel-item">
                            <img src="https://awhendr261101.github.io/allImages/images/porty/css-3.png" alt="Proyecto 1">
                            <h4>CSS</h4>
                            </div>
                        </div>
                    </ul>
                    <ul>
                        <div class="carousel-content">
                        <div class="carousel-item">
                            <img src="https://awhendr261101.github.io/allImages/images/porty/developer.png" alt="Proyecto 1">
                            <h4>Node JS</h4>
                            </div>
                        </div>
                    </ul>
                    <ul>
                        <div class="carousel-content">
                        <div class="carousel-item">
                            <img src="https://awhendr261101.github.io/allImages/images/porty/java-script.png" alt="Proyecto 1">
                            <h4>Java Script</h4>
                            </div>
                        </div>
                    </ul>
                    <ul>
                        <div class="carousel-content">
                        <div class="carousel-item">
                            <img src="https://awhendr261101.github.io/allImages/images/porty/html.png" alt="Proyecto 1">
                            <h4>HTML</h4>
                            </div>
                        </div>
                    </ul>
                    <ul>
                        <div class="carousel-content">
                        <div class="carousel-item">
                            <img src="https://awhendr261101.github.io/allImages/images/porty/file.png" alt="Proyecto 1">
                            <h4>VUE JS</h4>
                            </div>
                        </div>
                    </ul>
                </section>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>

.btn {
    background-color: #f3c623;
    color: #1c1c1c;
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.9rem;
    letter-spacing: 1px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #e6b51f;
}

.carousel-container {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-content {
  display: flex;
  animation: scroll 30s linear infinite;
}

.carousel-item {
    min-width: 200px;
    height: 200px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #333;
    padding: 30px;
    width: 22%;
    border-radius: 10px;
    text-align: center;

    h2{

    }

    p {
    font-size: 1rem;
    color: #bbbbbb;
    }

    h4 {
    font-size: 1.2rem;
    font-weight: 900;
    padding-top: 10px;
    }
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

@keyframes scroll {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(+50%);
  }
}

.section {
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  place-items: center;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  opacity: 1;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgb(0, 0, 0) 12.5%,
    rgb(0, 0, 0) 87.5%,
    rgba(0, 0, 0, 0) 100%
  );
  overflow: hidden;
}

.service-items {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}


.service-item img {
    margin-bottom: 20px;
}

.stats {
    display: flex;
    justify-content: space-between;
    text-align: center;
}

.stat-item {
    width: 22%;
}

.stat-item h4 {
    font-size: 2rem;
    color: #f3c623;
    margin-bottom: 10px;
}

.stat-item p {
    font-size: 1rem;
    color: #bbbbbb;
}

.descriptions{
    max-width: 80%;
    margin: 0 auto;
    font-size: 1rem;
    margin-bottom: 40px;
    color: #aaaaaa;
}

.services{
    padding-block: 0 !important;
}
.container{
    padding-block: 0 !important;
}

</style>