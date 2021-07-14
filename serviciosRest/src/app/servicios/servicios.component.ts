import { Component, OnInit } from '@angular/core';
import { Servicio } from '../servicio';
import { SERVICO   } from '../mock-servicios';
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  hero: Servicio = {
    id: 1,
    nombre: 'Kangreburguers',
    descripcion: 'Tienda de hamburguesas parodia de Bob esponja',
    producto: 'Hamburguesas'

  };

  constructor() { }

  ngOnInit(): void {
  }

}
