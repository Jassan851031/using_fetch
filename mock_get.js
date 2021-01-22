let url = "https://5fe1267504f0780017de9a59.mockapi.io/usuarios";
const lista = document.getElementById('lista');
const fragment = document.createDocumentFragment();
const button = document.getElementById("refresh");


button.addEventListener("click", (e) => {
    e.preventDefault();

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(element => {
                console.log(element.name)

                const fila = document.createElement('tr');
                const id = document.createElement('td');
                const name = document.createElement('td');
                const rut = document.createElement('td');
                const email = document.createElement('td');
                const phone = document.createElement('td');


                id.textContent = element.id;
                name.textContent = element.name;
                rut.textContent = element.rut;
                email.textContent = element.email;
                phone.textContent = element.phone;

                fila.appendChild(id)
                fila.appendChild(name)
                fila.appendChild(rut)
                fila.appendChild(email)
                fila.appendChild(phone)

                fragment.appendChild(fila);
            });
            lista.appendChild(fragment);
        })

})
