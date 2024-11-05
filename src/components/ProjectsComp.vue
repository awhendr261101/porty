<template>
    <section class="portfolio">
        <div class="container" cont>
            <h2>Projects</h2>
            <h3>My Masterpiece Collection</h3>
            <p class="description">
                Explore my diverse range of projects, showcasing expertise in web development, software engineering, and problem-solving. Each project highlights my passion for clean code, creative design, and practical solutions. Check out the technologies and innovations that drive my work and development journey by clicking on the github button 
            </p>

            <ul class="portfolio-filters">
                <li><button  class="" onclick="">Live Projects</button></li>
                <li><button  class="">Case Studies</button></li>
            </ul>

            <div class="port d-flex flex-row justify-content-center">
            <div class="portfolio-items d-flex flex-wrap">
                <div class="portfolio-item">
                    <img src="../assets/img/cart.png" alt="Portfolio Image 1">
                    <div class="portfolio-hover">
                        <p>Ecommerce</p>
                        <a href="https://micasa-a6199.web.app/" class="btn" target="_blank">Go Live</a>
                        <a href="https://github.com/awhendr261101/micasa" class="btn" target="_blank" >Github</a>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="../assets/img/calculator.png" alt="Portfolio Image 2">
                    <div class="portfolio-hover">
                        <p>Calculator</p>
                        <a href="https://calculator-wine-omega-59.vercel.app/" class="btn" target="_blank">Go Live</a>
                        <a href="https://github.com/awhendr261101/calculator" class="btn" target="_blank">Github</a>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="../assets/img/bmi.png" alt="Portfolio Image 3">
                    <div class="portfolio-hover">
                        <p>BMI Calculator</p>
                        <a href="https://bmi-caluculator.vercel.app/" class="btn" target="_blank">Go Live</a>
                        <a href="https://github.com/awhendr261101/BMICaluculator" class="btn" target="_blank">Github</a>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="../assets/img/joystick.png" alt="Portfolio Image 4">
                    <div class="portfolio-hover">
                        <p>Hangman</p>
                        <a href="https://hangman-phi-two.vercel.app/" class="btn" target="_blank">Go Live</a>
                        <a href="https://github.com/awhendr261101/hangman" class="btn" target="_blank">Github</a>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="../assets/img/shopping-bag.png" alt="Portfolio Image 4">
                    <div class="portfolio-hover">
                        <p>Hangman</p>
                        <a href="https://jseomp-geeks.vercel.app/" class="btn" target="_blank">Go Live</a>
                        <a href="https://github.com/awhendr261101/jseompGeeks" class="btn" target="_blank">Github</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
</template>

<script setup>

let show = false;

const handleClick = () => {
    show =!show;
}

console.log(handleClick);



</script>

<style scoped>

.btn {
    background-color: #f3c623;
    color: #1c1c1c;
    padding: 8px 16px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.6rem;
    letter-spacing: 1px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 5rem;
}

.btn:hover {
    background-color: #e6b51f;
}



.portfolio-filters {
    list-style: none;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}

.portfolio-filters li {
    margin-right: 20px;
}

.portfolio-filters button {
    background-color: #f3c623;
    color: #1c1c1c;
    padding: 12px 16px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.6rem;
    letter-spacing: 1px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    min-width: 8rem;
}

.portfolio-filters a.active {
    color: #ffffff;
}


.portfolio-items {
    max-width: 90% !important;
    gap: 30px !important;
}

.portfolio-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    max-width: 200px; /* Set a max width for the item */
    margin: auto; /* Center align the items if they have space */
}

.portfolio-item img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.portfolio-item:hover img {
    transform: scale(1.05);
}

.portfolio-hover {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    min-height: 60%;
    max-height: 85%;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0;
    text-align: center;
    transition: opacity 0.3s ease;
    padding: 20px;
    border-radius: 5px;
}

.portfolio-item:hover .portfolio-hover {
    opacity: 1;
}

.portfolio-hover p {
    font-size: 1rem;
    margin-bottom: 10px;
}

h2 {
    font-family: "Bowlby One", sans-serif;
    font-size: 2rem;
    color: #f3c623;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
}


</style>