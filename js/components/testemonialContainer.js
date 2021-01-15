export function testemonialContainer() {
    const container = document.querySelector(".container");

    container.innerHTML += `
    
    <div class="title-name">
        <h2>Uttalelser</h2>
    </div>

    <div class="testemonial-wrapper">

        <div class="testemonial-container">
            <div class="testemonial-text">
                <i class="fas fa-quote-right"></i>
                <p>Explore Leka har brukt Camilla Reppen til produksjon av hjemmeside og logo, og sitter igjen
                    med både
                    gode produkter og gode opplevelser. Camilla loset oss kompetent, kreativt og engasjert
                    gjennom
                    prosessen fra ide til ferdig produkt. Gjennom å bruke tid på å bli kjent med oss, vårt firma
                    og hva
                    vi ønsker å formidle, samhandlet Camilla med oss på en god og trygg måte for å finne gode
                    ideer og
                    løsninger. Jobber raskt, er positiv og løsningsorientert. Kan trygt anbefales!</p>
                <h3> - Lene Grydeland / Marieann Aune, <span>Daglig leder for <a href="https://exploreleka.no">Explore
                            Leka</a></span></h3>
            </div>
        </div>

        <div class="testemonial-container">
            <div class="testemonial-text">
                <i class="fas fa-quote-right"></i>
                <p>Camilla is one hungry mind with a big appetite for web design and front-end development. As a student
                    Camilla asks many good questions and is detail orientated. She would make a great addition to any
                    team.</p>
                <h3> -<a href="https://www.mannuelferreira.com"> Mannuel Ferreira </a>, Front End
                    Development
                    Lecturer,
                    <span>Noroff</span></h3>
            </div>
        </div>
    </div>

    
    
    `
}