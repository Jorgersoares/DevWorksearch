let card_area = document.querySelector('#grid-cards')

export default function exibeEmpresas(city, json) {
    card_area.innerHTML = ""
    //Adiciona os cards em tela
    json.map(key => {
        if (key.city == city)
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