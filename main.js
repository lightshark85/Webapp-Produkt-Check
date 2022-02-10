



function displayInput() {


    document.getElementById("result-text").innerHTML = "";
    var text = document.getElementById('Productname').value
    var name = document.getElementById('Productname').name

    if (text) {

        document.getElementById("result-text").innerHTML
            += name + ": " + text + "<br>";
    }

    document.getElementById("result").innerHTML = "";
    var ele = document.getElementsByClassName('rating')





    for (let i = 0; i < ele.length; i++) {

        if (ele[i].type === "radio") {

            if (ele[i].checked)
                document.getElementById("result").innerHTML
                    += ele[i].name + " Wert:"
                    + ele[i].value + "<br>";
        }

    }

}

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

const data = {
    labels: labels,
    datasets: [{
        label: document.getElementById('Productname').value,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    }]
};



const config = {
    type: 'line',
    data: data,
    options: {}
};



//get input values
function graphMe() {
}



var ele = document.getElementsByClassName("rating")



    var v1 = ele[1].value
    var v2 = ele[2].value
    var v3 = ele[3].value
    var v4 = ele[4].value
    var v5 = ele[5].value
    var v6 = ele[6].value
    var v7 = ele[7].value
    var v8 = ele[8].value
    var v9 = ele[9].value
    var v10 = ele[10].value
    var v11 = ele[11].value
    var v12 = ele[12].value
    var v13 = ele[13].value
    var v14 = ele[14].value
    var v15 = ele[15].value
    var v16 = ele[16].value
    var v17 = ele[17].value
    var v18 = ele[18].value
    var v19 = ele[19].value
    var v20 = ele[20].value
    var v21 = ele[21].value
    var v22 = ele[22].value
    var v23 = ele[23].value
    var v24 = ele[24].value
    var v25 = ele[25].value






    if (!v1) {
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
    myChart.data.datasets[1].data[0] = v2;
    myChart.data.datasets[2].data[0] = v3;
    myChart.data.datasets[3].data[0] = v4;
    myChart.data.datasets[4].data[0] = v5;
    myChart.data.datasets[5].data[0] = v6;
    myChart.data.datasets[6].data[0] = v7;
    myChart.data.datasets[7].data[0] = v8;
    myChart.data.datasets[8].data[0] = v9;
    myChart.data.datasets[9].data[0] = v10;
    myChart.data.datasets[10].data[0] = v11;
    myChart.data.datasets[11].data[0] = v12;
    myChart.data.datasets[12].data[0] = v13;
    myChart.data.datasets[13].data[0] = v14;
    myChart.data.datasets[14].data[0] = v15;
    myChart.data.datasets[15].data[0] = v16;
    myChart.data.datasets[16].data[0] = v17;
    myChart.data.datasets[17].data[0] = v18;
    myChart.data.datasets[18].data[0] = v19;
    myChart.data.datasets[19].data[0] = v20;
    myChart.data.datasets[20].data[0] = v21;
    myChart.data.datasets[21].data[0] = v22;
    myChart.data.datasets[22].data[0] = v23;
    myChart.data.datasets[23].data[0] = v24;
    myChart.data.datasets[24].data[0] = v25;
    myChart.update();
