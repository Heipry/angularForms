import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  orientaciones = ['aaaa', 'bbbb', 'cccc'];
  model = new Usuario(null,'','','', false);
  pwd2 ='';
  constructor() { }

  ngOnInit() {      
  }

}
