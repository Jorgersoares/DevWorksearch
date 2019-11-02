let banner_img = document.querySelector('div#banner-img')
let banner_btn = document.querySelector('button#banner-btn')
let search_area = document.querySelector('div#search-area')
let choice_city = document.querySelector('#choice-city')
let card_area = document.querySelector('#grid-cards')
let choice_location = document.querySelector('#choice-location')
let brand = document.querySelector('.navbar-brand')
let html = document.querySelector('html')
import api from './api.mjs'

//Home
banner_btn.addEventListener('click', () => {
    banner_img.classList.add('d-none')
    search_area.classList.remove('d-none')
    html.style.overflowY = "scroll"
})

brand.addEventListener('click', () => {
    banner_img.classList.remove('d-none')
    search_area.classList.add('d-none')
    html.style.overflowY = "scroll"
})

// Chamada da API
const res = api("https://project-js-api.herokuapp.com/api/get")
res.then(data => {
    addCity(data)
})

//Adicionando as cidades no componente combo box
function addCity(json) {
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
            //Renderiza em tela as empresa da cidade escolhida
            exibeEmpresas(choice_city.value,json)
            //adiciona filtro por bairro
            addLocation(choice_city.value, json)
        }
    })
}

function addLocation(city,json) {

    const location_list = []

    choice_location.innerHTML = ""
    choice_location.insertAdjacentHTML('beforeend', '<option value="" disabled selected hidden>Filtrar por bairro...</option>')
    choice_location.insertAdjacentHTML('beforeend', '<option>All</option>')

    json.map(key => {
        if(key.city == city)
            location_list.push(key.location)
    })

    //Bairros distintos
    const set_location_arr = Array.from(new Set(location_list))
    set_location_arr.map(i => {
        choice_location.insertAdjacentHTML('beforeend', `<option value="${i}">${i}</option>`)
    })
    
    //exibe o componente para filtrar
    choice_location.classList.remove('d-none')

    //Funcao para resetar a exibicao original dos cards das empresas
    function showAll() {
        let cards = Array.from(document.querySelectorAll('#card'))
        cards.map(card => {
            card.classList.remove('d-none')
            card.classList.add('d-flex')
        })
    }

    choice_location.addEventListener("change", () => {
        event.preventDefault()
        if (choice_location.value == "All") {
            showAll()
        }
        else {
            showAll()
            json.map(key => {
                if (key.location != choice_location.value && choice_location.value != "None" && choice_location.value != "Filtrar...") {
                    let div_card = document.querySelector('#E' + key._id).parentNode
                    div_card.classList.remove('d-flex')
                    div_card.classList.add('d-none')
                }
            })

        }
    })
}

function exibeEmpresas(city,json) {
    card_area.innerHTML = ""
    //Adiciona os cards em tela
    json.map(key => {
        if(key.city == city)
            card_area.insertAdjacentHTML('beforeend',
                `<div class="col-md-4 d-flex justify-content-center" id="card">
        <div class="card-e" id="E${key._id}">
            <div class="div-logo">
            <img src="logo/${key.logo}" alt="" class="logo">
            </div>
            <button type="button" class="btn btn-primary w-50 mt-2" data-toggle="modal"
                data-target="#Modal${key._id}"> Detalhes </button>
            <!-- Modal -->
            <div class="modal fade" id="Modal${key._id}" tabindex="-1" role="dialog"
                aria-labelledby="ModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">${key.name}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div style="width: 100%"><iframe width="100%" height="300"
                                    src="https://maps.google.com/maps?width=100%&amp;height=300&amp;hl=en&amp;q=${key.name}+()&amp;ie=UTF8&amp;t=&amp;z=20&amp;iwloc=B&amp;output=embed"
                                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a
                                        href="https://www.maps.ie/coordinates.html">latitude longitude
                                        finder</a></iframe></div><br />

                                        <p class="ml-1"> <i class="fas fa-phone-volume"> </i> ${key.phone} </p>
                        </div>

                        <div class="modal-footer">
                        <a href="http://${key.site}" class="btn btn-primary" target="_blank">Ver site</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`

            )
    })
}