export function contactContainer() {
    const container = document.querySelector(".contact-container");

    container.innerHTML += `
    <div class="title-container">
        <h1>Kontaktinformasjon</h1>
    </div>
    <div class="card-box-warpper">
        <div class="card-box">
            <div class="card">
                <img src="circle-image.png">
                <div class="social-icons">
                    <a href=""><i class="fab fa-github"></i></a>
                    <a href=""><i class="fab fa-linkedin"></i></a>
                    <a href=""><i class="fab fa-facebook"></i></a>
                </div>
            </div>
            <div class="contact-details">
                <div class="contact-info">
                    <h3>Kontakt<h3>
                    <h4>Camilla Reppen</h4>
                    <hr>
                    <div class="contact-icons">
                    <li><i class="fas fa-user-circle"></i><a href="#"> Front-end Utvikler</a></li>
                    <li><i class="fas fa-at"></i><a href="mailto:camilla.reppen88@gmail.com"> camilla.reppen88@gmail.com</a></li>
                    <li><i class="fas fa-phone-alt"></i><a href="tel: 46748737"> 46748737</a></li>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="create-text">
        <h2>La oss skape noe fantastisk sammen</h2>
        <p>Kontakt meg for å starte så fort som mulig</p>
    </div>

        
        
    
    `;
}