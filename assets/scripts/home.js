const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2dd1fcc1abmsh9501b49f89f0c49p1f069bjsnfc5e945caf77',
		'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
	}
};


const infoIp = ip => {
    return fetch(`https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/${ip}`, options)
        .then(response => response.json())
        .catch(error => { console.error(error); });
}

const form = document.getElementById("first-form");
const ip = document.getElementById("ip");
const submit = document.getElementById("submit");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { value } = ip;
    if (!value || value == "") return
    submit.setAttribute('disabled', '')
    submit.innerText = "Buscando..."
    const ipInfo = await infoIp(value)
    if (ipInfo) {
        resultado.innerHTML = JSON.stringify(ipInfo, null, 2)
    }
    submit.removeAttribute('disabled')
    submit.innerText = "Hacer otra busqueda"
})
