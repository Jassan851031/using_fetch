const url_post = "https://5fca4ac03c1c2200164421dd.mockapi.io/tgr/nomina";
const post = document.getElementById("buttom");



post.addEventListener("click", (e) => {
    e.preventDefault();

    const nombre = document.getElementById('name').value
    const rut = document.getElementById('rut').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value

    const data = {

        "name": nombre,
        "rut": rut,
        "email": email,
        "phone": phone
    };
    console.log("**************")
    console.log(data)
    console.log("**************")

     fetch(url_post, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((resp) => resp.json())
        .then((data) => console.log(data));
   

});


