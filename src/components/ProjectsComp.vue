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

.portfolio-filters {
    list-style: none;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}

.portfolio-filters li {
    margin-right: 20px;
}

.portfolio-filters a {
    color: #f3c623;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    font-size: 1rem;
}

.portfolio-filters a.active {
    color: #ffffff;
}

.portfolio-items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.portfolio-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
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
    height: 60%;
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
    font-size: 1.2rem;
    margin-bottom: 10px;
}
</style>