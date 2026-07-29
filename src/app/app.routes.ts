import { Routes } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { InicioComponent } from './inicio/inicio.component'

export const routes: Routes = [
  { path: '', component: PortadaComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'detalles', component: DetallesComponent },
  { path: 'confirmacion', component: ConfirmacionComponent },
];
