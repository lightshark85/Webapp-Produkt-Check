



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
    label: 'Produkt 1',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 0, 0, 0, 0, 0, 0],
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};

//get input values
function graphMe(){
  
 var v1 = parseInt(document.getElementById("input2").value);
 var v2 = parseInt(document.getElementById("input3").value);
 var v3 = parseInt(document.getElementById("input4").value);

if (!v1) { v1 = 0; }
if (!v2) { v2 = 0; }
if (!v3) { v3 = 0; }

myChart.data.datasets[0].data[0] = v1;
myChart.data.datasets[1].data[0] = v2;
myChart.data.datasets[2].data[0] = v3;
myChart.data.datasets[3].data[0] = v1;
myChart.data.datasets[4].data[0] = v2;
myChart.data.datasets[5].data[0] = v3;
myChart.update();  
}