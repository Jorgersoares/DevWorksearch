let choice_city = document.querySelector('#choice-city')
let choice_location = document.querySelector('#choice-location')
import filterLocation from './filter_bairros.mjs'
import exibeEmpresas from './render_empresas.mjs'

export default function addCity(json) {
    let city_list = []

    json.map(key => {
        city_list.push(key.city)
    })

    //Cidades distintas
    let set_city_list = Array.from(new Set(city_list))

    //adicionando no componente da interface
    set_city_list.map(i => {
        choice_city.insertAdjacentHTML('beforeend', `<option value="${i}">${i}</option>`)
    })
    
    choice_city.addEventListener("change", () => {
        event.preventDefault()
        if (choice_city.value === "None") {
            card_area.innerHTML = ''
            choice_location.classList.add('d-none')
        }
        else {
            choice_location.classList.remove('d-none')
            //Chama função para adicionar o filtro por bairro de acordo com a cidade escolhida
            filterLocation(choice_city.value)
            //Chama função que irá renderizar os cards das empresas
            exibeEmpresas(choice_city.value)
            
        }
    })
}