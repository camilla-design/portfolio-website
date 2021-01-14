export function aboutContainer()  {
    const container = document.querySelector(".about-container");

    container.innerHTML += `
    <div class="information-content">
    <div class="title-container">
        <h1>Hvem er dette?</h1>
        <h3>{ <a href"" class="typewrite" data-period="2000" data-type='[ "Om meg" ]'> <span class="wrap"></span></a> }</h3>
    </div>
    <div class="about-content">
        <div class="as-designer">
            <h2>Som Designer</h2>
            <p>User Interface Designer med lidenskap for å designe fine og funksjonelle bruker opplevelser. Samt lidenskap for å glede kunde og skape visjon av dems budskap.</p>
            <p>Jeg blir inspirert av din tillit. Jeg vil gjøre mitt ytterste for å inspirere brukere og deg/kunder, med moderne og brukervennlig design. </p>
        </div>
        <div class="as-coder">
            <h2>Som < koder ></h2>
            <p>Front-end Utvikler som fokuserer på organisert, elegant og effektiv kode. Fåretrekker HTML5, SASS, med en “touch” av JavaScript.</p>
        </div>
        </div>
        <div class="skill-container">
            <div class="skillbox">
                <p>Html5</p>
                <p class="percent">80%</p>
                <div class="skill">
                    <div class="skill_level html-bar" style="width: 80%;"></div>
                </div>
            </div>
            <div class="skillbox">
                <p>Css3</p>
                <p class="percent">70%</p>
                <div class="skill">
                    <div class="skill_level css-bar" style="width: 70%;"></div>
                </div>
            </div>
            <div class="skillbox">
                <p>Sass</p>
                <p class="percent">55%</p>
                <div class="skill">
                    <div class="skill_level sass-bar" style="width: 55%;"></div>
                </div>
            </div>
            <div class="skillbox">
                <p>JavaScript</p>
                <p class="percent">20%</p>
                <div class="skill">
                    <div class="skill_level javascript-bar" style="width: 20%;"></div>
                </div>
            </div>
            <div class="skillbox">
                <p>React</p>
                <p class="percent">5%</p>
                <div class="skill">
                    <div class="skill_level react-bar" style="width: 5%;"></div>
                </div>
            </div>
        </div>
    </div>
    `;
}