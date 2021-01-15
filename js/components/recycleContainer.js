export function recycleContainer() {
    const container = document.querySelector(".earproof-container");

    container.innerHTML += `
    <div class="container">
        <img class="logo" src="./gallery/re-cycle-logo.png">
        <img src="./gallery/re-cycle.png">
        <div class="info">
            <h2>Prosjekt <span>Informasjon</span></h2>
            <hr>
            <div class="project">
                <h3>Prosjekt</h3>
                <p>Mobilresponsivt nettsted</p>
            <div>
            <div class="project-name">
                <h3>Prosjekt navn</h3>
                <p>Re-Cycle</p>
            <div>
            <div class="category">
                <h3>Kategori</h3>
                <p>HTML & CSS</p>
            <div>
            <div class="date">
                <h3>Dato</h3>
                <p>3 November 2019</p>
            <div>
            <div class="action-buttons">
                <div class="read-more">
                    <a href="" id="myBtn">Les mer</a>
                </div>
                <div class="link">
                    <a href="http://www.camillareppen.no/recycle/">Link til webside</a>
                </div>
            </div>
        <div>
    <div>

   
    
    
    `;
}