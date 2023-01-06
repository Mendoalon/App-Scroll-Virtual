import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tabla!: number;
  hasta!: number;
  resultados: any[] = [];
  error: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  caclular() {

    if (this.tabla < 1 || this.hasta < 1 ) {
      this.error = true;
      setTimeout(()=>{
        this.error = false;
      },3000)

      return;
    }

    this.resultados = [];
    for (let i = 0; i < this.hasta; i++) {
      console.log(this.tabla + 'x' + i, ' = ' + this.tabla * i);
      this.resultados.push({
        tabla: this.tabla,
        resultado: this.tabla * i
      });

    }

    
  }


}
