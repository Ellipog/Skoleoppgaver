function getRequest() {
    console.log('Funksjonen fungerer');
    var inputText = document.getElementById("fname").value;
    console.log(inputText);
    //var sql = "SELECT * FROM elever WHERE Fornavn ="+inputText?'';
    //console.log(sql);
    fetch('http://localhost:3000/')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

function doesItWork() {
    console
}