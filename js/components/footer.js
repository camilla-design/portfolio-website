export function footer() {
    const container = document.querySelector(".footer-container");

    container.innerHTML += `
   
    <div class="contact-icons">
        <a href="./contact.html"><i class="fas fa-user-circle"></i></a>
        <a href="mailto:camilla.reppen88@gmail.com"><i class="fas fa-at"></i></a>
        <a href="tel: 46748737"><i class="fas fa-phone-alt"></i></a>
    </div>
    <div class="copy-right">
    <p>©copy-right 2021 camilla reppen</p>
    </div>
    <div class="contact-info">
    <a href="http://camillareppen.no/cv/cv-camilla-reppen.pdf">Last ned cv</a>
    </div>
`
}