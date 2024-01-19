// Importar modulos del router de Angular
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
import { HomeComponent } from './home/home.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';

// Array de rutas
const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'videojuegos', component: VideojuegoComponent},
  {path:'zapatillas', component: ZapatillasComponent},
  {path:'cursos', component: CursosComponent},
  {path:'cursos/:nombre/', component: CursosComponent},
  {path:'cursos/:nombre/:followers', component: CursosComponent},
  {path:'externo', component: ExternoComponent},
  {path: '**', component: HomeComponent}
];

// Exportar modulo del router
/*
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
