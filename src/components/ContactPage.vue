<template>
    <div class="contact-section">
      <div class="container">
        <h2>Contact Me</h2>
        <h3>Ways To Contact Me</h3>
        <p class="description">
          Let’s connect! Whether you're interested in collaborating, have a project idea, or are offering employment opportunities, feel free to reach out. I’m always open to new ventures and career prospects. Fill out the form below, and I’ll get back to you soon!
        </p>
        <div class="contact-info">
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>awodwasihlehendrick@gmail.com</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <span>+27 79 587 0761</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-comments"></i>
            <span>LinkedIn</span>
          </div>
        </div>
        <div class="social-links">
          <a href="#" class="social-link">
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
          <a href="#" class="social-link">
            <i class="fa fa-github-square" aria-hidden="true"></i>
          </a>
        </div>
        <div class="contact-wrapper">
          <!-- Form Added Here -->
          <div class="contact-form">
            <h3>Get in Touch</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit" class="submit-btn">Send Email</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
.contact-section {
  background-color: #2a2a2a;
  color: #fff;
  padding: 50px 0;
  text-align: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  color: #ffba00;
  margin-bottom: 10px;
}

h3 {
  font-size: 24px;
  margin-bottom: 20px;
}

.description {
  color: #b3b3b3;
  font-size: 14px;
  margin-bottom: 40px;
  line-height: 1.6;
}

.contact-info {
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-item i {
  font-size: 24px;
  margin-bottom: 10px;
}

.social-links {
  display: flex;
  justify-content: center;
}

.social-link {
  margin: 0 10px;
  color: #ffba00;
  font-size: 18px;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.social-link i {
  margin-right: 8px;
}

footer {
  margin-top: 50px;
  font-size: 12px;
  color: #b3b3b3;
}

/* New form styles */
.contact-form {
  background-color: #333;
  padding: 30px;
  border-radius: 8px;
}

.contact-form h3 {
  color: #ffba00;
  margin-bottom: 20px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #2a2a2a;
  border: 1px solid #444;
  color: #fff;
  border-radius: 5px;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #b3b3b3;
}

.contact-form .submit-btn {
  background-color: #ffba00;
  color: #2a2a2a;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 5px;
}

.contact-form .submit-btn:hover {
  background-color: #ffa500;
}

</style>
