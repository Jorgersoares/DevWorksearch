let choice_location = document.querySelector('#choice-location')

export default function filterLocation(city,json) {

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

    //Funcao para resetar o filtro
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