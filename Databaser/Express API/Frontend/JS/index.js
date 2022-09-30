function getElev() {

    var input_fornavn = document.getElementById("FornavnInput").value;

    fetch('http://localhost:3000/getElev/' + input_fornavn)
        .then((response) => response.json())
        .then(

            data => {
                console.log(data);
                if (data.length > 0) {

                    var temp = "";
                    temp += "<tr><th> ElevID </th><th> Fornavn </th><th> Etternavn </th><th> Klasse </th><th> Hobby </th><th> Kjønn </th><th> Datamaskin </th></tr>";
                    data.forEach((itemData) => {
                        temp += "<tr>";
                        temp += "<td>" + itemData.ElevID + "</td>";
                        temp += "<td>" + itemData.Fornavn + "</td>";
                        temp += "<td>" + itemData.Etternavn + "</td>";
                        temp += "<td>" + itemData.Klasse + "</td>";
                        temp += "<td>" + itemData.Hobby + "</td>";
                        temp += "<td>" + itemData.Kjonn + "</td>";
                        temp += "<td>" + itemData.Datamaskin + "</td></tr>";
                    });
                    document.getElementById('getTable').innerHTML = temp;
                }
            }
        );
}


function updateRow() {

    var input_elevid = document.getElementById("hvilket_elevid_update").value;
    var input_hobby = document.getElementById("hvilken_hobby").value;

    var url = 'http://localhost:3000/updaterow/' + input_elevid;

    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));
}

function deleteRow() {

    var input_elevid = document.getElementById("hvilken_elev").value;

    var url = 'http://localhost:3000/deleterow/' + input_elevid;

    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));
}

function insertRow() {

    var input_elevid = document.getElementById("hvilken_elevid_insert").value;
    var input_fornavn = document.getElementById("fornavn_insert").value;
    var input_etternavn = document.getElementById("etternavn_insert").value;
    var input_hobby = document.getElementById("hobby_insert").value;
    var input_kjonn = document.getElementById("kjonn_insert").value;
    var input_programfag = document.getElementById("programfag_insert").value;
    var input_datamaskin = document.getElementById("datamaskin_insert").value;
}