
/*
const labels = [
    'Kundennutzen',
    'Innovativität',
    'Technische Qualität',
    'Zubehör, Optionen',
    'Dokumentation',
    'Serviceleistungen',
    'Marktpreis',
    'Händlerrabatte',
    'Preis/Leistung',
    'Flächendeckung',
    'Qualität Vertrieb',
    'Motivation Vertrieb',
    'Abnehmerbindung',
    'Lieferzeit',
    'Liefertreue',
    'Bekanntheitsgrad',
    'Produktimage',
    'Werbemaßnahmen',
    'Verkaufsförderung',
    'Pressearbeit',
    'Erzielte Umsätze',
    'Erzielte Gewinne (DB)',
    'Beschaffungssituation',
    'F&E Kompetenz',
    'Produktteam',
]; */

let variables = [];
let labels=[];


function displayInput() {


    document.getElementById("result-text").innerHTML = "";
    var text = document.getElementById('Productname').value
    var name = document.getElementById('Productname').name

    if (text) {

        document.getElementById("result-text").innerHTML
            += name + ": " + text + "<br>";
    }

    let t=0;

    document.getElementById("result").innerHTML = "";
    var ele = document.getElementsByClassName('rating')

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




var ctx = document.getElementById("Chart1");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: labels,
    datasets: [{
        axis: 'y',
        fill: false,
        label: document.getElementById('Productname').value,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: variables,
    }]
},
});



const config = {
    //type: 'line',
    data: myChart.data.data,
    options: {
        indexAxis: 'y'

        
        
    },
    scales: {
        y: {
          min: 10,
          max: 50,
        }
      }
};


//get input values

function graphMe() {
    myChart.update();
}