import { Component } from '@angular/core';
import { configuracion } from './models/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = '05_learning-angular';
  public description: string;

  constructor(){
    this.title = configuracion.title;
    this.description = configuracion.description;
  }


}
