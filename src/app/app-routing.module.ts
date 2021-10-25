import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TiendaComponent} from './pages/tienda/tienda.component';
import {RegistroComponent} from './pages/registro/registro.component';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from "./pages/tienda/dashboard/dashboard.component";
import {PagosComponent} from "./pages/tienda/pagos/pagos.component";
import {OfertasComponent} from "./pages/tienda/ofertas/ofertas.component";
import {PreparacionComponent} from "./pages/tienda/preparacion/preparacion.component";

const routes: Routes = [
  {path: 'tienda', component: TiendaComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'pagos', component: PagosComponent},
  {path: 'ofertas', component: OfertasComponent},
  {path: 'preparacion', component: PreparacionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
