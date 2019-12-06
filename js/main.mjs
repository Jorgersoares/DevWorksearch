let banner_img = document.querySelector('div#banner-img')
let banner_btn = document.querySelector('button#banner-btn')
let search_area = document.querySelector('div#search-area')
let brand = document.querySelector('.navbar-brand')
let html = document.querySelector('html')

import api from './api.mjs'
import { cidades_select, filtro_cidade } from './cidades.mjs'

//Irá exibir a tela de interação com o usuário
banner_btn.addEventListener('click', () => {
    banner_img.classList.add('d-none')
    search_area.classList.remove('d-none')
    html.style.overflowY = "scroll"
})

//Volta para o banner inicial do site
brand.addEventListener('click', () => {
    banner_img.classList.remove('d-none')
    search_area.classList.add('d-none')
    html.style.overflowY = "scroll"
})

//Chamada da API
api().then(
    data => {
        //Função que adiciona as opções de cidade no componente
        cidades_select(data)

        //Função que mostra as empresas de acordo com a cidade escolhida
        filtro_cidade(data)

    }, erro => {
        console.log(erro)
    }
)



