



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
    data: [-3, 0, 3, 1, 1.5, 2, 3],
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};