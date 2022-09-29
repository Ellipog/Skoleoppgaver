function getRequest() {
    fetch('http://localhost:3000/start')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

function test() {
    fetch('http://localhost:3000/test')
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