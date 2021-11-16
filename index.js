
console.log("live covid tracker");
var value = document.getElementById('inputval').value;
let cont1 = document.getElementById('cont1');
let cont2 = document.getElementById('cont2');
let cont3 = document.getElementById('cont3');
let cont4 = document.getElementById('cont4');
let cont5 = document.getElementById('cont5');
let cont6 = document.getElementById('cont6');
let cont7 = document.getElementById('cont7');
let cont8 = document.getElementById('cont8');
let updatedTime = document.getElementById('updatedTime');

const covidData = (i) => {
let value = document.getElementById('inputval').value;
const apiData = fetch(`https://corona.lmao.ninja/v2/countries/${value}`);
    apiData.then((data) => {
        return data.json();
    }).then((actualData) => {
        let datan = actualData.cases;
        console.log(datan);
        cont1.innerHTML += `Total Confirmed : ${actualData.cases}`;
        cont2.innerHTML += `New Confirmed : ${actualData.todayCases}`;
        cont3.innerHTML += `TotalDeaths : ${actualData.deaths}`;
        cont4.innerHTML += `NewDeaths : ${actualData.todayDeaths}`;
        cont5.innerHTML += `TotalRecovered : ${actualData.recovered}`;
        cont6.innerHTML += `NewRecovered : ${actualData.todayRecovered}`;
        cont7.innerHTML += `Active cases : ${actualData.active}`;
        cont8.innerHTML += `Tests conducted : ${actualData.tests}`;
    })
}

const resetAll = () => {
    cont1.innerHTML = "";
    cont2.innerHTML = "";
    cont3.innerHTML = "";
    cont4.innerHTML = "";
    cont5.innerHTML = "";
    cont6.innerHTML = "";
    cont7.innerHTML = "";
    cont8.innerHTML = "";
}

