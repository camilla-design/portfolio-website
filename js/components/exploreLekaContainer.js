export function exploreLekaContainer() {
    const container = document.querySelector(".earproof-container");

    container.innerHTML += `
    <div class="container">
        <img class="logo" src="./gallery/logo-color.jpg">
        <img src="./gallery/explore-leka.png">
        <div class="info">
            <h2>Prosjekt <span>Informasjon</span></h2>
            <hr>
            <div class="project">
                <h3>Prosjekt</h3>
                <p>Turist side</p>
            <div>
            <div class="project-name">
                <h3>Prosjekt navn</h3>
                <p>Explore Leka</p>
            <div>
            <div class="category">
                <h3>Kategori</h3>
                <p>HTML, CSS & JAVASCRIPT</p>
            <div>
            <div class="date">
                <h3>Dato</h3>
                <p>18 Juli 2020</p>
            <div>
            <div class="action-buttons">
                <div class="read-more">
                    <a href="" id="myBtn">Les mer</a>
                </div>
                <div class="link">
                    <a href="https://exploreleka.no">Link til webside</a>
                </div>
            </div>
        <div>
    <div>

   
    
    
    `;
}