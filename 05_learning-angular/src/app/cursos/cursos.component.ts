import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-cursos',
    templateUrl: './cursos.component.html',
    styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
    public titulo: string = "Componente de categoria: Cursos";
    public nombre: string ='';
    public followers: number = 0;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
    ) {

    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this._route.params.subscribe((params: Params) => {
            //this.nombre = params.nombre;
            this.nombre = params['nombre'];
            this.followers = +params['followers']; // IMPORTANTE! hay que agregar el "+ " para cambiar el tipo de dato de string a number
        });

        if(this.nombre == 'ninguno'){
            this._router.navigate(['/home']);
        }
    }

    redirigir(){
        this._router.navigate(['/zapatillas']);
    }
}
