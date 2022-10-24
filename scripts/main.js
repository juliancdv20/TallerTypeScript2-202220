import { series } from './data.js';
var seriestot = document.getElementById('series');
var promTemp = document.getElementById("promedioTemporadas");
var seriesImage = document.getElementById('series-image');
var seriesName = document.getElementById("series-name");
var seriesDescription = document.getElementById("series-descrip");

mostrarSeries(series);

promTemp.innerHTML = "Seasons average: ".concat(getTotalTemps(series));

function mostrarSeries(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = " <td>".concat(serie.numero, "</td>\n                            <td class=\"serieName\">").concat(serie.name, "</td>\n                            <td>").concat(serie.channel, "</td>\n                            <td>").concat(serie.seasons, "</td>");
        trElement.addEventListener("click", function () {
            mostrarSeriesDetail(serie);
        });
        seriestot.appendChild(trElement);
    });
}

function mostrarSeriesDetail(series){
    console.log("Mostrando: "+series.name)
    seriesImage.src = series.image;
    seriesName.innerHTML=`${series.name}`;
    seriesDescription.innerHTML=`${series.description}`;
}

function getTotalTemps(series){
    let totalTemps = 0;
    let totalSeries = 0;
    series.forEach((serie) => {
        totalTemps = totalTemps + serie.seasons;
        totalSeries +=1;
        });
    return totalTemps/totalSeries;
}
