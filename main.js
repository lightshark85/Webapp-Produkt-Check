





// Funktion zum prüfen ob alle Felder ausgefüllt sind

//var v = ele.checked
// if(v === 25){}

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
];

 let variables = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25

];

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

        
        
    }
};



//get input values
function graphMe() {



 /*  if (!v1) {
        v1 = 0;
    }
    if (!v2) {
        v2 = 0;
    }
    if (!v3) {
        v3 = 0;
    }
    if (!v4) {
        v4 = 0;
    }
    if (!v5) {
        v5 = 0;
    }
    if (!v6) {
        v6 = 0;
    }
    if (!v7) {
        v7 = 0;
    }
    if (!v8) {
        v8 = 0;
    }
    if (!v9) {
        v9 = 0;
    }
    if (!v10) {
        v10 = 0;
    }
    if (!v11) {
        v11 = 0;
    }
    if (!v12) {
        v12 = 0;
    }
    if (!v13) {
        v13 = 0;
    }
    if (!v14) {
        v14 = 0;
    }
    if (!v15) {
        v15 = 0;
    }
    if (!v16) {
        v16 = 0;
    }
    if (!v17) {
        v17 = 0;
    }
    if (!v18) {
        v18 = 0;
    }
    if (!v19) {
        v19 = 0;
    }
    if (!v20) {
        v20 = 0;
    }
    if (!v21) {
        v21 = 0;
    }
    if (!v22) {
        v22 = 0;
    }
    if (!v23) {
        v23 = 0;
    }
    if (!v24) {
        v24 = 0;
    }
    if (!v25) {
        v25 = 0;
    }




    myChart.data.datasets[0].data[0] = v1;
    myChart.data.datasets[0].data[1] = v2;
    myChart.data.datasets[0].data[2] = v3;
    myChart.data.datasets[0].data[3] = v4;
    myChart.data.datasets[0].data[4] = v5;
    myChart.data.datasets[0].data[5] = v6;
    myChart.data.datasets[0].data[6] = v7;
    myChart.data.datasets[0].data[7] = v8;
    myChart.data.datasets[0].data[8] = v9;
    myChart.data.datasets[0].data[9] = v10;
    myChart.data.datasets[0].data[10] = v11;
    myChart.data.datasets[0].data[11] = v12;
    myChart.data.datasets[0].data[12] = v13;
    myChart.data.datasets[0].data[13] = v14;
    myChart.data.datasets[0].data[14] = v15;
    myChart.data.datasets[0].data[15] = v16;
    myChart.data.datasets[0].data[16] = v17;
    myChart.data.datasets[0].data[17] = v18;
    myChart.data.datasets[0].data[18] = v19;
    myChart.data.datasets[0].data[19] = v20;
    myChart.data.datasets[0].data[20] = v21;
    myChart.data.datasets[0].data[21] = v22;
    myChart.data.datasets[0].data[22] = v23;
    myChart.data.datasets[0].data[23] = v24;
    myChart.data.datasets[0].data[24] = v25;

*/
    myChart.update();
}