import { ContactoUsuario } from '../models/contacto.usuario';
import { Component } from '@angular/core';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  public contacto_usuario: ContactoUsuario;

  constructor(){
    this.contacto_usuario = new ContactoUsuario('','','','')
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  onSubmit(form: any){
    console.log("Evento Submit lanzado.")
    console.log(this.contacto_usuario)
    //form.reset();
  }
}
