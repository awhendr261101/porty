<template>
    <div class="land">
        <section class="landing-section">
            <div class="left-section">
                <h1 name>Awodwa <br> Hendrick.</h1>
                <ul class="social-links">
                    <li><a href="#">Github LinkedIn</a></li>
                    <li><a href="#">Discord Dribbble</a></li>
                </ul>
                <div class="button-cont">
                    <a href="#" class="contact-btn">Contact Me</a>
                </div>
            </div>
            
            <div class="image-section">
                <div class="cir">
    
                </div>
                <img  class="img-fluid" src="../assets/img/cropped-secstunt.png" alt="Jack Harper" landingimg>
            </div>
    
            <div class="right-section">
                <div class="intro-text">
                    <h3>Introduction</h3>
                    <h2>UI/UX Designer, <br> Full Stack Web Developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#">Learn more ></a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
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

.land{
    font-family: 'Poppins', sans-serif;
    background-color: #1a1a1a;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .cir{
        position: absolute;
        z-index: 0;
        background-color: #121212;
        min-width: 20rem;
        min-height: 20rem;
        align-self: center;
        border-radius: 50% ;
    }
    
    .image-section{
        display: flex;
        flex-direction: column;
    
        [landingimg]{
            z-index: 3;
            padding-top: 2rem;
        }
    }
    
    .landing-section {
        display: flex;
        justify-content: space-between;
        max-width: 1200px;
        width: 100%;
        padding: 20px;
    }
    

    

    
    .social-links {
        list-style: none;
        margin: 0;
        text-align: left;
    }
    
    .social-links li {
        margin-bottom: 10px;
        
    }
    
    .social-links a {
        text-decoration: none;
        color: #ffcc00;
        font-weight: 600;
    }
    
    .contact-btn {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 20px;
        background-color: transparent;
        border: 2px solid #ffcc00;
        color: #ffcc00;
        text-decoration: none;
        font-weight: 600;
        transition: background-color 0.3s ease;
    }
    
    .contact-btn:hover {
        background-color: #ffcc00;
        color: #1a1a1a;
    }

    .button-cont{
        display: flex;
        justify-content: flex-start;
    }
    
    .right-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .intro-text {
        max-width: 500px;
    }
    
    .intro-text h3 {
        color: #ffcc00;
        font-weight: 600;
        margin-bottom: 10px;
    }
    
    .intro-text h2 {
        font-size: 2.5em;
        line-height: 1.4;
    }
    
    .intro-text p {
        margin: 20px 0;
    }
    
    .intro-text a {
        color: #ffcc00;
        text-decoration: none;
        font-weight: 600;
    }
    
    .image-section {
        width: 300px;
    }
    
    .image-section img {
        width: 100%;
        border-radius: 10px;
    }
}
</style>