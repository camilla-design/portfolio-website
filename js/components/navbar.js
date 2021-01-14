export function navbar() {
    const navContainer = document.querySelector(".nav-container");

    navContainer.innerHTML += `
    <div class="topnav">
            <div class="company-logo">
               <a href="./index.html"> <img src="logo-vertical-black.png"></a>
            </div>
            <div class="company-logo-bigger-devices">
               <a href="./index.html"> <img src="logo-horizontal-black.png"></a>
            </div>
            <div id="navLinks">
                <a href="./about.html">Om meg</a>
                <a href="./goles.html">Mine mål</a>
                <a href="./portfolio.html">Mine prosjekter</a>
                <a href="#">Kontakt meg</a>
                <hr>
                <div class="contact-info">
                    <a href="#">Last ned cv</a>
                    <div class="contact-icons">
                        <a href="#"><i class="fas fa-user-circle"></i></a>
                        <a href="#"><i class="fas fa-at"></i></a>
                        <a href="#"><i class="fas fa-phone-alt"></i></a>
                    </div>
                </div>
            </div>
            <a href="javascript:void(0);" class="icon" onclick="navbar()">
                <div class="menu-button">
                    <div class="menu-button-burger"></div>
                </div>
            </a>


          </div>
    `
}