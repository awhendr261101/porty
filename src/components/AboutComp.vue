<template>
    <section class="services">
        <div class="container">
            <h2>Skills</h2>
            <h3>What I Am Great At</h3>
            <p class="descriptions">
                I was born in the Eastern Cape and grew up in Cape Town, where I later graduated from Oval North Technical High School. It was during my time there, studying Computer Applications Technology, that I discovered my passion for coding. After high school, I knew I wanted to pursue programming further, and I was accepted into WeThinkCode, one of Africa's leading tech institutions, where I studied software engineering.

After completing the two-year program, I sought to deepen my expertise and joined Life Choices, a renowned youth empowerment NGO in South Africa. There, I focused on web development and completed an intensive 6-month bootcamp that transformed my skills and career path.

Today, I am confident in the knowledge and experience I have gained from both institutions. With my diverse skill set and continuous drive to learn, I am ready to excel in any role within the tech industry.
            </p>
            <div class="carousel-container">
                <section class="section">
                    <ul>
                        <div class="carousel-content">
                        <div class="carousel-item">
                            <img src="https://awhendr261101.github.io/allImages/images/porty/bootstrap.png" alt="Proyecto 1">
                            
                            <h4>Marketing</h4>
                        </div>
                        </div>
                    </ul>
                        
                    <ul>
                        <div class="carousel-content">
                        <div class="carousel-item">
                            <img src="https://awhendr261101.github.io/allImages/images/porty/css-3.png" alt="Proyecto 1">
                            </div>
                        </div>
                    </ul>
                    <ul>
                        <div class="carousel-content">
                        <div class="carousel-item">
                            <img src="https://awhendr261101.github.io/allImages/images/porty/developer.png" alt="Proyecto 1">
                            
                            </div>
                        </div>
                    </ul>
                    <ul>
                        <div class="carousel-content">
                        <div class="carousel-item">
                            <img src="https://awhendr261101.github.io/allImages/images/porty/java-script.png" alt="Proyecto 1">
                            
                            </div>
                        </div>
                    </ul>
                    <ul>
                        <div class="carousel-content">
                        <div class="carousel-item">
                            <img src="https://awhendr261101.github.io/allImages/images/porty/html.png" alt="Proyecto 1">
                            
                            </div>
                        </div>
                    </ul>
                    <ul>
                        <div class="carousel-content">
                        <div class="carousel-item">
                            <img src="https://awhendr261101.github.io/allImages/images/porty/file.png" alt="Proyecto 1">
                            
                            </div>
                        </div>
                    </ul>
                </section>
            </div>
            <div class="stats">
                <div class="stat-item">
                    <h4>9+</h4>
                    <p>Years of Experience</p>
                </div>
                <div class="stat-item">
                    <h4>200+</h4>
                    <p>Satisfied Customers</p>
                </div>
                <div class="stat-item">
                    <h4>769+</h4>
                    <p>Design Items</p>
                </div>
                <div class="stat-item">
                    <h4>124+</h4>
                    <p>Clients Served</p>
                </div>
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

/* Contenido del carrusel */
.carousel-content {
  display: flex;
  animation: scroll 50s linear infinite;
}

/* Cada elemento del carrusel */
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

/* Animación para el scroll automático */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
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


/* here  */
/* .service-items {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}

.service-item {
    background-color: #333;
    padding: 30px;
    width: 22%;
    border-radius: 10px;
    text-align: center;
}

.service-item img {
    margin-bottom: 20px;
}

.service-item h4 {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.service-item p {
    font-size: 1rem;
    color: #bbbbbb;
}

 */


</style>