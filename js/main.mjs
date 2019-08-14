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
    html.style.overflowY = "hidden"
})

// Chamada da API
async function fetchAPI(url) {
    const json = await api(url);
    addCity(json);
}

fetchAPI("https://project-js-api.herokuapp.com/api/get");

function addCity(json) {
    let city_arr = []
    json.map(key => {
        city_arr.push(key.city)
    })
    let set_city_arr = Array.from(new Set(city_arr))

    set_city_arr.map(i => {
        choice_city.insertAdjacentHTML('beforeend', `<option value="${i}">${i}</option>`)
    })
    filterCity(json)
}

function filterCity(json) {
    choice_city.addEventListener("change", () => {
        event.preventDefault()
        if (choice_city.value === "None") {
            card_area.innerHTML = ''
            choice_location.classList.add('d-none')
        }
        else {
            let json_filter = json.filter(i => i.city === choice_city.value)
            exibeEmpresas(json_filter)
            addLocation(json_filter)
        }
    })
}
function addLocation(json) {

    const location_arr = []

    choice_location.innerHTML = ""

    choice_location.insertAdjacentHTML('beforeend', '<option selected>Filtrar...</option>')
    choice_location.insertAdjacentHTML('beforeend', '<option>All</option>')

    json.map(key => {
        location_arr.push(key.location)
    })
    
    const set_location_arr = Array.from(new Set(location_arr))

    set_location_arr.map(i => {
        choice_location.insertAdjacentHTML('beforeend', `<option value="${i}">${i}</option>`)
    })

    choice_location.classList.remove('d-none')

    filterLocation(json)
}

function filterLocation(json) {

    function showAll(){
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

function exibeEmpresas(json) {
    card_area.innerHTML = ""
    json.map(key => {
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