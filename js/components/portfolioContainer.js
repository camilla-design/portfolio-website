export function portfolioContainer() {

    const container = document.querySelector(".portfolio-container");

    container.innerHTML += `
    
    <div class="portfolio-content">
    <h1>Hva jeg gjør?</h1>
    <h3>{ <a href"" class="typewrite" data-period="2000" data-type='[ "Portefølje" ]'> <span class="wrap"></span></a> }</h3>
            <p>Jeg har valgt ut noen prosjekter jeg ønsker å vise her. Jeg har mere projekter på min Github, samt andre skoleprojekter og kurs.</p>
        </div>
    </div>
    <div class="gallery-content">
    <div class="card">
        <img src="./gallery/earproof.png">
            <div class="info">
                <h2>EarProof</h2>
                <p>HTML, SASS, JAVASCRIPT & API</p>
                <a href="./earproof.html" class="button">Les mer</a>
            </div>
        </div>
        <div class="card">
            <img src="./gallery/explore-leka.png">
            <div class="info">
                <h2>Explore Leka</h2>
                <p>HTML, CSS & JAVASCRIPT</p>
                <a href="./explore-leka.html" class="button">Les mer</a>
            </div>
        </div>
        <div class="card">
            <img src="./gallery/re-cycle.png">
            <div class="info">
                <h2>Re-Cycle</h2>
                <p>HTML & CSS</p>
                <a href="./re-cycle.html" class="button">Les mer</a>
            </div>
        </div>
        <div class="card">
            <img src="./gallery/shadowball.png">
            <div class="info">
                <h2>Shadowball</h2>
                <p>HTML, CSS & JAVASCRIPT</p>
                <a href="./shadowball.html" class="button">Les mer</a>
            </div>
        </div>

    </div>
   
    
    


    
    `;
}