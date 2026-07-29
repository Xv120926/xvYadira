import { Routes } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { InicioComponent } from './inicio/inicio.component'

export const routes: Routes = [
  { path: '', component: PortadaComponent },
  { path: 'inicio', component: InicioComponent},
];
