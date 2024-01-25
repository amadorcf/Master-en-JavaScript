import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';


@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: any;
  public fecha: any;
  public new_user: any;
  public usuario_guardado: any;

  constructor(private _peticionesService: PeticionesService){
    this.userId = 1;
    this.new_user = {
      "name": "",
      "job": ""
    };
  }

  ngOnInit(){
    this.fecha = new Date();

    this.cargaUsuario();
  }

  cargaUsuario(){
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      result =>{
        this.user = result.data;
        if(this.userId == ''){
          alert("Debe de haber al menos un digito")
        }else{
          console.log(this.user);
        }
      }
    );
  }

  onSubmit(form:any){
    this._peticionesService.addUser(this.new_user).subscribe(
    response => {
      this.usuario_guardado = response;
      if(this.usuario_guardado == ''){
        alert("Debe de haber al menos un usuario")
      }else{
        console.log(this.usuario_guardado);
        form.reset();
      }
    }
  );
  }
}



