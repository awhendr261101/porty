<template>
    <section class="portfolio">
        <div class="container">
            <h2>Portfolio</h2>
            <h3>My Masterpiece Collection</h3>
            <p class="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
            </p>

            <ul class="portfolio-filters">
                <li><a href="#" class="active">All</a></li>
                <li><a href="#">UI / UX</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Web Research</a></li>
                <li><a href="#">Marketing</a></li>
            </ul>

            <div class="portfolio-items">
                <div class="portfolio-item">
                    <img src="https://via.placeholder.com/300x400" alt="Portfolio Image 1">
                    <div class="portfolio-hover">
                        <p>Project Description 1</p>
                        <a href="#" class="btn">View Project</a>
                        <a href="#" class="btn">External Link</a>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="https://via.placeholder.com/300x400" alt="Portfolio Image 2">
                    <div class="portfolio-hover">
                        <p>Project Description 2</p>
                        <a href="#" class="btn">View Project</a>
                        <a href="#" class="btn">External Link</a>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="https://via.placeholder.com/300x400" alt="Portfolio Image 3">
                    <div class="portfolio-hover">
                        <p>Project Description 3</p>
                        <a href="#" class="btn">View Project</a>
                        <a href="#" class="btn">External Link</a>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="https://via.placeholder.com/300x400" alt="Portfolio Image 4">
                    <div class="portfolio-hover">
                        <p>Project Description 4</p>
                        <a href="#" class="btn">View Project</a>
                        <a href="#" class="btn">External Link</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
</style>