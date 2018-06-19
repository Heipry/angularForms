import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  orientaciones = ['Hetero', 'Homo', 'Es complicado'];

 // model = new Usuario('pepe', 'pepe1' , 'pepe@pepe.pepe' , true, 'pepe1',
   // 'hombre', 'Homo', 'Relación seria') ;
  model = new Usuario('', '' , '' , false, '','','','');
  constructor() { }

  ngOnInit() {
  }

}
