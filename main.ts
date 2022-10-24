import { Serie } from './serie.js';

import { series } from './data.js';

let seriestot: HTMLElement = document.getElementById('series')!;
let promTemp: HTMLElement = document.getElementById('promedioTemporadas')!;
const seriesImage: HTMLImageElement  = document.getElementById("series-image") as HTMLImageElement;
const seriesName: HTMLElement = document.getElementById("series-name") as HTMLElement;
const seriesDescription: HTMLElement = document.getElementById("series-descrip") as HTMLElement;;

mostrarSeries(series);

function mostrarSeries(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.numero}</td>
                           <td><a id="info${serie.name}">
                               ${serie.name}</a> </td>    
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    trElement.addEventListener("click", function(){
      mostrarSeriesDetail(serie);
                          });
    seriestot.appendChild(trElement);
  });

  promTemp.innerHTML= `Seasons average: ${getTotalTemps(series)}`;
  
}

function getTotalTemps(series: Serie[]): number {
    let totalTemps: number = 0;
    let totalSeries: number = 0;
    series.forEach((serie) => {
        totalTemps = totalTemps + serie.seasons;
        totalSeries +=1;
        });
    return totalTemps/totalSeries;
}

function mostrarSeriesDetail(series:Serie){
    console.log("Mostrando: "+series.name)
    seriesImage.src = series.image;
    seriesName.innerHTML=`${series.name}`;
    seriesDescription.innerHTML=`${series.description}`;
}
