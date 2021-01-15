export function heroContainer() {
    const container = document.querySelector(".hero-container");

    container.innerHTML += `
    <div class="container-small-devices">
        <div class="typewriter-container">
            <h3>Front-end { <a href"" class="typewrite" data-period="2000" data-type='[ "student", "freelancer"  ]'> <span class="wrap"></span></a> } </h3>
        </div>

        <div class="name-container">
            <h2>Camilla</h2>
        </div>

        <div class="portfolio-image">
            <img src="me-dark.png">
        </div>

        <div class="quote">
            <h4><i class="fas fa-quote-left"></i> Inspired by your trust <i class="fas fa-quote-right"></i></h4>
        </div>

        <div class="action-buttons">
            <a href="./about.html" class="read-more">Les mer</a>
            <a href="mailto:camilla.reppen88@gmail.com" class="contact">Kontakt meg</a>
        </div> 
        
    </div>

    <div class="container-bigger-devices">
        <div class="flex-container">
        <div class="typewriter-container">
            <h3>Front-end { <a href"" class="typewrite" data-period="2000" data-type='[ "student", "freelancer"  ]'> <span class="wrap"></span></a> } </h3>
        </div>

        <div class="name-container">
            <h2>Camilla</h2>
        </div>

        <div class="quote">
            <h4><i class="fas fa-quote-left"></i> Inspired by your trust <i class="fas fa-quote-right"></i></h4>
        </div>

        <div class="action-buttons">
            <a href="./about.html" class="read-more">Les mer</a>
            <a href="mailto:camilla.reppen88@gmail.com" class="contact">Kontakt meg</a>
        </div>
        </div>

        <div class="portfolio-image">
            <img src="me-dark.png">
        </div>

        
        
    
    `;
}