let banner_img = document.querySelector('div#banner-img')
let banner_btn = document.querySelector('button#banner-btn')
let search_area = document.querySelector('div#search-area')
let brand = document.querySelector('.navbar-brand')
let html = document.querySelector('html')
import api from './api.mjs'
import addCity from './add_cidades.mjs'

//Home
banner_btn.addEventListener('click', () => {
    banner_img.classList.add('d-none')
    search_area.classList.remove('d-none')
    html.style.overflowY = "scroll"
})

//Logo
brand.addEventListener('click', () => {
    banner_img.classList.remove('d-none')
    search_area.classList.add('d-none')
    html.style.overflowY = "scroll"
})

// Chamada da API
const res = api("https://project-js-api.herokuapp.com/api/get")
res.then(data => {
    //Chama função para adicionar as cidades para pesquisar empresas
    addCity(data)
})


