<template>
    <div class="container-fluid">
      <div class="container-fluid min-vh-100 d-flex flex-row align-items-center">
        <div class="row">
          <h2 class="pb-5">My education</h2>
          <div class="col-lg-12">
  
            <div class="horizontal-timeline">
  
              <ul class="list-inline items">
                <li class="list-inline-item items-list">
                  <div class="px-4 text-white">
                    <div class="event-date badge bg-body">20-09-20</div>
                    <h5 class="pt-2">Matric</h5>
                    <p class="text-muted">I matriculated from Oval North Technical High School in 2020, earning a Bachelor’s pass. My time at Oval North sparked my passion for technology, particularly through my exposure to Computer Applications Technology, which laid the foundation for my journey into software development.</p>

                  </div>
                </li>
                <li class="list-inline-item items-list">
                  <div class="px-4 text-white">
                    <div class="event-date badge bg-body">28-01-24</div>
                    <h5 class="pt-2">WeThinkCode</h5>
                    <p class="text-muted">I studied for two years at WeThinkCode, where I specialized in Software Development. During this time, I covered key electives such as systems integration, quality assurance, and mobile development, gaining hands-on experience that deepened my technical skills and problem-solving abilities</p>

                  </div>
                </li>
                <li class="list-inline-item items-list">
                  <div class="px-4 text-white">
                    <div class="event-date badge bg-body">20-09-24</div>
                    <h5 class="pt-2">LC Academy</h5>
                    <p class="text-muted">I attended a six-month intensive bootcamp at Life Choices, where I learned full-stack web development. In addition to technical skills, I received professional development training, which helped me enhance my teamwork, and project management abilities, preparing me for real-world tech environments.</p>

                  </div>
                </li>

              </ul>
            </div>
  
          </div>
  
  
          <h2 class="pb-5">My Experience</h2>
          <div class="col-lg-12">
            <div class="horizontal-timeline">
              <ul class="list-inline items">
                <li class="list-inline-item items-list ">
                  <div class="px-4 text-white">
                    <div class="event-date badge bg-body">currently</div>
                    <h5 class="pt-2">LC Studio</h5>
                    <p class="text-muted">I’m currently an intern at Life Choices Academy, where I’m undergoing hands-on training in multiple tech electives. This role is providing me with practical experience across diverse areas in technology, enhancing my skill set and preparing me for a dynamic career in the tech industry.</p>

                  </div>
                </li>

                <li class="list-inline-item items-list">
                  <div class="px-4 text-white">
                    <div class="event-date badge bg-body">28-01-24</div>
                    <h5 class="pt-2">WeThinkCode</h5>
                    <p class="text-muted">I completed intensive training in a work simulation program at WeThinkCode, where I gained practical experience in key electives such as Q&A, Systems Integration, and Mobile App Development. This program provided a solid foundation in real-world tech practices</p>

                  </div>
                </li>
              </ul>
            </div>
  
          </div>

        </div>
      </div>
  
    </div>
</template>
  
<script setup>
// import { computed } from 'vue';
// import { useStore } from 'vuex';

// const store = useStore();
// const education = computed(() => store.state.education);
// const experience = computed(() => store.state.experience);
// console.log(education);
</script>
  
<style scoped>
    /* General styling */
    .container-fluid {
      background-color: #2b2b2b;
    }
  
  
    .horizontal-timeline .items {
      border-top: 3px solid #ffffff; 
    }
  
    .horizontal-timeline .items .items-list {
      display: block;
      position: relative;
      text-align: center;
      padding-top: 70px;
      margin-right: 0;
      color: #ffffff; 
    }
  
    li{
      background-color: #ffffff7e;
    }
  
    .horizontal-timeline .items .items-list:before {
      content: "";
      position: absolute;
      height: 36px;
      border-right: 2px dashed #ffffff; 
      top: 0;
    }
  
    .horizontal-timeline .items .items-list .event-date {
      position: absolute;
      top: 36px;
      left: 0;
      right: 0;
      width: 75px;
      margin: 0 auto;
      font-size: 0.9rem;
      padding-top: 8px;
      background-color: #ffffff; 
      color: #000000; 
    }
  
    @media (min-width: 1140px) {
      .horizontal-timeline .items .items-list {
        display: inline-block;
        width: 24%;
        padding-top: 45px;
      }
  
      .horizontal-timeline .items .items-list .event-date {
        top: -40px;
      }
    }

    @media (max-width: 1140px){
      ul li{
        margin-inline: 0 !important;
      }
    }
    h1{
      color: #ffffff;
      text-align: center;
      padding-block: 50px;
    }

    ul li{
        margin-inline: 20px;
        padding: 10px;
    }

    .btn {
    background-color: #f3c623;
    color: #1c1c1c;
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.6rem;
    letter-spacing: 1px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    }

    .btn:hover {
        background-color: #e6b51f;
    }

    .pb-5{
      padding-top: 50px !important;
      color: #e6b51f;
    }

    .row{
      padding-top: 60px;
    }

    
    .services{
    padding-block: 0;
}

</style>