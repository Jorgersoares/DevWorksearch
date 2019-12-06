import exibe_empresas from './empresas.mjs'

let choice_city = document.querySelector('#choice-city')
let card_area = document.querySelector('#grid-cards')
let filter_choice_location = document.querySelector('#choice-location')
import { bairros_select, filtro_bairro } from './bairros.mjs'


export function cidades_select(json) {
    let city_list = []

    json.map(key => {
        city_list.push(key.city)
    })

    //Cidades distintas
    let set_city_list = Array.from(new Set(city_list))

    //adicionando no componente select
    set_city_list.map(i => {
        choice_city.insertAdjacentHTML('beforeend', `<option value="${i}">${i}</option>`)
    })
}

export function filtro_cidade(json) {


    choice_city.addEventListener("change", () => {
        event.preventDefault()
        if (choice_city.value === "None") {
            //Reseta os elementos    
            card_area.innerHTML = ""
            filter_choice_location.innerHTML = ""

            //remove filtro de bairro
            filter_choice_location.classList.add('d-none')
        }
        else {
            //Reseta os elementos
            card_area.innerHTML = ""
            filter_choice_location.innerHTML = ""
            
            //Exibe filtro de bairro
            filter_choice_location.classList.remove('d-none')
            //Função que irá exibir os cards das empresas
            exibe_empresas(choice_city.value, json)

            //Função que adiciona as opções de bairro da cidade que está selecionada
            bairros_select(choice_city.value, json)

            //Função que mostra as empresas de acordo com o bairro e cidade escolhida
            filtro_bairro(json)
        }
    })
}
