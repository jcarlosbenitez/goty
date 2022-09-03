import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css'],
})
export class GraficoBarraHorizontalComponent implements OnDestroy {
  results: any[] = [
    {
      name: 'Juego1',
      value: 20,
    },
    {
      name: 'Juego2',
      value: 10,
    },
    {
      name: 'Juego3',
      value: 1,
    },
    {
      name: 'Juego4',
      value: 5,
    },
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nigthtLights';
  intervalo;
  constructor() {
    console.log('tick');
    const newResults = [...this.results];
    this.intervalo = setInterval(() => {
      for (let i in this.results) {
        newResults[i].value = Math.round(Math.random() * 500);
      }
      this.results = [...newResults];
    }, 1500);
  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }
}
