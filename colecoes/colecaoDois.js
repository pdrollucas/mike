/*  Filtrar */
const filterElement = document.querySelector('#btn-buscar')
const cards = document.querySelectorAll('#tenis-card')

const conheca = document.querySelector('#conheca')
const bannerDois = document.querySelector('#banner-2')
const tituloUm = document.querySelector('#tenis-titulo')

filterElement.addEventListener('input', filterCards)

function filterCards(){
    if(filterElement.value != ''){
        conheca.style.display = 'none'
        bannerDois.style.display = 'none'
        
        tituloUm.innerHTML = `
            <h2 class="tenis-titulo">Resultados para a busca de "${filterElement.value}"</h2>
        `

        let itemsFound = false;

        for(let card of cards){
            let title = card.querySelector('h3')
            title = title.textContent.toLowerCase()
            let filterText = filterElement.value.toLowerCase()
            if(!title.includes(filterText)){
                card.style.display = 'none'
            } else{
                card.style.display = 'block'
                itemsFound = true
            }
        }
        
        if (!itemsFound) {
            tituloUm.innerHTML = `
                <h2 class="tenis-titulo">:( <br> Não foi encontrado nenhum resultado para "${filterElement.value}"<br> Por favor, tente outro termo.</h2>
            `
        }
        

    } else{
        for(let card of cards){
            card.style.display = 'block'
        }
        conheca.style.display = 'flex'
        bannerDois.style.display = 'flex'
        tituloUm.style.display = 'block'
        
        tituloUm.innerHTML = `
        <h2 class="tenis-titulo">Coleção Jordans</h2>
        `
    }
}