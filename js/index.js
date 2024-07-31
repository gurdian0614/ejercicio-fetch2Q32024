fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    let card = '<div class="row row-cols-1 row-cols-md-3 g-4">'
    
    for (let usuario of data) {
        card += `<div class="col">
                        <div class="card">
                        <div class="card h-100">
                            <img src="https://www.cavsi.com/espanol/wp-content/uploads/informatica/usuario-de-computadoras.jpg" class="card-img-top" alt="Usuario">
                            <div class="card-body">
                                <h5 class="card-title">${usuario.name}</h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Nombre de usuario:</strong> ${usuario.username}</li>
                                    <li class="list-group-item"><strong>Correo electrónico:</strong> ${usuario.email}</li>
                                    <li class="list-group-item"><strong>Calle:</strong> ${usuario.address.street}</li>
                                    <li class="list-group-item"><strong>Ciudad:</strong> ${usuario.address.city}</li>
                                    <li class="list-group-item"><strong>Teléfono:</strong> ${usuario.phone}</li>
                                    <li class="list-group-item"><strong>Compañía:</strong> ${usuario.company.name}</li>
                                </ul>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">${usuario.website}</small>
                            </div>
                        </div>
                    </div>
                </div></div>`
    }
    card += "</div>"

    document.getElementById("cardLista").innerHTML = card
    
})