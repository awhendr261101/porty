<template>
    <div class="container-fluid">
      <div class="container-fluid min-vh-100 d-flex flex-row align-items-center">
        <div class="row">
          <h1 class="pb-5">My education</h1>
          <div class="col-lg-12">
  
            <div class="horizontal-timeline">
  
              <ul class="list-inline items">
                <li class="list-inline-item items-list ">
                  <div class="px-4 text-white">
                    <div class="event-date badge bg-body">2 June</div>
                    <h5 class="pt-2">Event One</h5>
                    <p class="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloremque eum adipisci soluta sequi ex maiores praesentium odio et saepe recusandae ab ratione veritatis corrupti, pariatur quia? Recusandae, necessitatibus officiis voluptate sit velit nostrum iusto laborum doloremque excepturi odio debitis?</p>
                    <div>
                      <a href="#" data-mdb-ripple-init class="btn btn-primary btn-sm">Read more</a>
                    </div>
                  </div>
                </li>
                <li class="list-inline-item items-list">
                  <div class="px-4 text-white">
                    <div class="event-date badge bg-body">5 June</div>
                    <h5 class="pt-2">Event Two</h5>
                    <p class="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloremque eum adipisci soluta sequi ex maiores praesentium odio et saepe recusandae ab ratione veritatis corrupti, pariatur quia? Recusandae, necessitatibus officiis voluptate sit velit nostrum iusto laborum doloremque excepturi odio debitis?</p>
                    <div>
                      <a href="#" data-mdb-ripple-init class="btn btn-primary btn-sm">Read more</a>
                    </div>
                  </div>
                </li>
                <li class="list-inline-item items-list">
                  <div class="px-4 text-white">
                    <div class="event-date badge bg-body">7 June</div>
                    <h5 class="pt-2">Event Three</h5>
                    <p class="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloremque eum adipisci soluta sequi ex maiores praesentium odio et saepe recusandae ab ratione veritatis corrupti, pariatur quia? Recusandae, necessitatibus officiis voluptate sit velit nostrum iusto laborum doloremque excepturi odio debitis?</p>
                    <div>
                      <a href="#" data-mdb-ripple-init class="btn btn-primary btn-sm">Read more</a>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
  
          </div>
  
  
          <h1 class="pb-5">My Experience</h1>
          <div class="col-lg-12">
            <div class="horizontal-timeline">
              <ul class="list-inline items">
                <li class="list-inline-item items-list ">
                  <div class="px-4 text-white">
                    <div class="event-date badge bg-body">2 June</div>
                    <h5 class="pt-2">Event One</h5>
                    <p class="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloremque eum adipisci soluta sequi ex maiores praesentium odio et saepe recusandae ab ratione veritatis corrupti, pariatur quia? Recusandae, necessitatibus officiis voluptate sit velit nostrum iusto laborum doloremque excepturi odio debitis?</p>
                    <div>
                      <a href="#" data-mdb-ripple-init class="btn btn-primary btn-sm">Read more</a>
                    </div>
                  </div>
                </li>
                <li class="list-inline-item items-list">
                  <div class="px-4 text-white">
                    <div class="event-date badge bg-body">5 June</div>
                    <h5 class="pt-2">Event Two</h5>
                    <p class="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloremque eum adipisci soluta sequi ex maiores praesentium odio et saepe recusandae ab ratione veritatis corrupti, pariatur quia? Recusandae, necessitatibus officiis voluptate sit velit nostrum iusto laborum doloremque excepturi odio debitis?</p>
                    <div>
                      <a href="#" data-mdb-ripple-init class="btn btn-primary btn-sm">Read more</a>
                    </div>
                  </div>
                </li>
                <li class="list-inline-item items-list">
                  <div class="px-4 text-white">
                    <div class="event-date badge bg-body">7 June</div>
                    <h5 class="pt-2">Event Three</h5>
                    <p class="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloremque eum adipisci soluta sequi ex maiores praesentium odio et saepe recusandae ab ratione veritatis corrupti, pariatur quia? Recusandae, necessitatibus officiis voluptate sit velit nostrum iusto laborum doloremque excepturi odio debitis?</p>
                    <div>
                      <a href="#" data-mdb-ripple-init class="btn btn-primary btn-sm">Read more</a>
                    </div>
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
        background-color: #1e1e1e;
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

    

</style>