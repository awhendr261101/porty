<template>
    <section class="services">
      <div class="container">
        <div class="carousel-container">
          <section class="section">
            <div class="carousel-content">
              <div class="carousel-item">
                <img src="../assets/img/soft/analytical.png" alt="Bootstrap" />
                <h4>Analytical</h4>
              </div>
              <div class="carousel-item">
                <img src="../assets/img/soft/team.png" alt="CSS" />
                <h4>Team Work</h4>
              </div>
              <div class="carousel-item">
                <img src="../assets/img/soft/creativity.png" alt="Node JS" />
                <h4>Creativity</h4>
              </div>
              <div class="carousel-item">
                <img src="../assets/img/soft/leadership.png" alt="JavaScript" />
                <h4>Leadership</h4>
              </div>
              <div class="carousel-item">
                <img src="../assets/img/soft/punctuality.png" alt="HTML" />
                <h4>Punctuality</h4>
              </div>
              <div class="carousel-item">
                <img src="../assets/img/soft/detail.png" alt="Vue JS" />
                <h4>Detail</h4>
              </div>

              <!-- bottom  -->
              <div class="carousel-item">
                <img src="../assets/img/soft/analytical.png" alt="Bootstrap" />
                <h4>Analytical</h4>
              </div>
              <div class="carousel-item">
                <img src="../assets/img/soft/team.png" alt="CSS" />
                <h4>Team Work</h4>
              </div>
              <div class="carousel-item">
                <img src="../assets/img/soft/creativity.png" alt="Node JS" />
                <h4>Creativity</h4>
              </div>
              <div class="carousel-item">
                <img src="../assets/img/soft/leadership.png" alt="JavaScript" />
                <h4>Leadership</h4>
              </div>
              <div class="carousel-item">
                <img src="../assets/img/soft/punctuality.png" alt="HTML" />
                <h4>Punctuality</h4>
              </div>
              <div class="carousel-item">
                <img src="../assets/img/soft/detail.png" alt="Vue JS" />
                <h4>Detail</h4>
              </div>

            </div>
          </section>
        </div>
      </div>
    </section>
</template>
  
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
  /* Adding the blur/fade effect on the edges */
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 15%,
    rgba(0, 0, 0, 1) 85%,
    rgba(0, 0, 0, 0) 100%
  );
}
  
  .carousel-content {
    display: flex;
    animation: scroll 60s linear infinite;
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
  }
  
  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .carousel-item h4 {
    font-size: 1.2rem;
    font-weight: 900;
    padding-top: 10px;
    color: #f3c623;
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
  
  .section {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    place-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow: hidden;
  }
  
  /* Responsiveness */
  @media (max-width: 1024px) {
    .carousel-item {
      width: 30%;
    }
  }
  
  @media (max-width: 768px) {
    .carousel-item {
      width: 45%;
    }
  }
  
  @media (max-width: 576px) {
    .carousel-item {
      width: 100%;
    }
  }

  :is(.container,.services){
    padding-block: 10px !important;
}
</style>
  