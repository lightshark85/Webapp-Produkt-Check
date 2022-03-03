
//Speicher für Werte
let variables = [];
let labels = [];
let title = [];

//die Werte aus der Tabelle holen
function displayInput() {

    document.getElementById("result-text").innerHTML = "";
    let text = document.getElementById('Productname').value
    let name = document.getElementById('Productname').name

    if (text) {
        title[0] = text;
    }
    let t = 0;
    document.getElementById("result").innerHTML = "";
    let ele = document.getElementsByClassName('rating')

    for (let i = 0; i < ele.length; i++) {

        if (ele[i].type === "radio") {

            if (ele[i].checked) {

                variables[t] = ele[i].value
                labels[t] = ele[i].name
                t++

            }

        }
    }
}

//den chart configurieren
let config = {
    type: 'line',
    options: {indexAxis: 'y'},
    scales: {y: {min: 3, max: 5,}},
    title: {display: true,},
    data: {
        labels: labels,
        datasets: [{
            axis: 'y',
            fill: false,
            label: title,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: variables,
        }]
    },
};

// Chart erstellen
let ctx = document.getElementById("Chart1");
let myChart = new Chart(ctx, config);


//den graph auktualisieren
function graphMe() {
    myChart.update();

}