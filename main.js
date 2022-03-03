
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
let title = [];


function displayInput() {


    document.getElementById("result-text").innerHTML = "";
    let text = document.getElementById('Productname').value
    let name = document.getElementById('Productname').name

    if (text) {

            title[0]=text;

    }

    let t=0;

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
            label:title,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: variables,
        }]
    },
};


let ctx = document.getElementById("Chart1");
let myChart = new Chart(ctx, /*{
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
},*/config);




//get input values

function graphMe() {
    myChart.update();

}