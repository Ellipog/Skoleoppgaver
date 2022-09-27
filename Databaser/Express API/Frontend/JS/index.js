function getRequest() {
    console.log('Funksjonen fungerer');
    fetch('http://localhost:3000/start')
        .then((response) => response.json())
        .then((data) => console.log(data));
}