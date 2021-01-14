export function golesContainer()  {

    const container = document.querySelector(".goal-container");

    container.innerHTML += `
    <div class="goal-content">
    <h1>Hva vil jeg nå?</h1>
    <h3>{ <a href"" class="typewrite" data-period="2000" data-type='[ "Mine mål" ]'> <span class="wrap"></span></a> }</h3>
            <h2>Som Designer</h2>
            <p>Mitt mål som designer er å skape trygghet, stabilt og ærlig miljø. 
            Besitter en kombinasjon av teknisk og visuell kompetanse, brukerorienterte løsninger for web- og mobile enheter til fingerspissene.
            Lage unike, moderne designer som passer til kundens målgruppe.</p>
        </div>
        <div class="as-coder">
            <h2>Som < koder ></h2>
            <p>Større innblikk i programmeringsspråk som Java, C-baserte språk, Ruby, php og Python, som alle har ulike styrker og svakheter og forskjellige bruksområder. 
            Bli enda bedre kjent med aktuelle JavaScript-rammeverkene, eksempelvis Angular og React. Samt nye lanserte rammeverk.</p>
        </div>
    </div>
    </div>
    
    `;
}