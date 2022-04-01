

//Speicher für Werte
let variables1 = [];
let variables2 = [];
let variables3 = [];
let labels1 = [];
let labels2 = [];
let labels3 = [];
let title1 = [];
let title2 = [];
let title3 = [];

    function openCity(evt, Produkt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}
    document.getElementById(Produkt).style.display = "block";
    evt.currentTarget.className += " active";
}


//die Werte aus der Tabelle holen
function displayInput() {

    let text1 = document.getElementById('Productname1').value
    let text2 = document.getElementById('Productname2').value
    let text3 = document.getElementById('Productname3').value

    if (text1) {
        title1[0] = text1;
    }
    if (text2) {
        title2[0] = text2;
    }
    if (text3) {
        title3[0] = text3;
    }

    let t = 0;
    let z=0;
    let u=0;
    let ele1 = document.getElementsByClassName('rating1')
    let ele2 = document.getElementsByClassName('rating2')
    let ele3 = document.getElementsByClassName('rating3')

    for (let i = 0; i < ele1.length; i++) {

        if (ele1[i].type === "radio") {

            if (ele1[i].checked) {

                variables1[t] = ele1[i].value
                labels1[t] = ele1[i].name
                t++

            }

        }
    }
    for (let i = 0; i < ele2.length; i++) {

        if (ele2[i].type === "radio") {

            if (ele2[i].checked) {

                variables2[z] = ele2[i].value
                labels2[z] = ele2[i].name
                z++

            }

        }
    }

    for (let i = 0; i < ele3.length; i++) {

        if (ele3[i].type === "radio") {

            if (ele3[i].checked) {

                variables3[u] = ele3[i].value
                labels3[u] = ele3[i].name
                u++

            }

        }
    }
}

//den chart configurieren
let config = {
    type: 'line',
    options: {indexAxis: 'y', aspectRatio: 0.5,
    scales: {x: {
        min: -3,
        max: 3,}
    },

},

    
    title: {display: true,},
    data: {
        labels:labels1,
        datasets: [{
            //axis: 'y',
            fill: false,
            //labels:labels1,
            label: title1,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: variables1,
        },
            {
            //axis: 'y',
            fill: false,
            //labels: labels2,
            label: title2,
            backgroundColor: 'rgb(151,255,99)',
            borderColor: 'rgb(151,255,99)',
            data: variables2,

        },
            {
           // axis: 'y',
            fill: false,
            //labels: labels3,
            label: title3,
            backgroundColor: 'rgb(69,224,243)',
            borderColor: 'rgb(69,224,243)',
            data: variables3,
        }]
    },
};

// Chart erstellen
let ctx = document.getElementById("Chart1");
let myChart = new Chart(ctx, config);


//Download Chart Image
document.getElementById("download").addEventListener('click', function(){
    /*Get image of canvas element*/
    var url_base64jp = document.getElementById("Chart1").toDataURL("image/jpg");
    /*get download button (tag: <a></a>) */
    var a =  document.getElementById("download");
    /*insert chart image url to download button (tag: <a></a>) */
    a.href = url_base64jp;
});

//den graph auktualisieren
function graphMe() {
    myChart.update();

}