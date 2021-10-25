import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import { RegistroComponent } from './pages/registro/registro.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/tienda/dashboard/dashboard.component';
import { OfertasComponent } from './pages/tienda/ofertas/ofertas.component';
import { PagosComponent } from './pages/tienda/pagos/pagos.component';
import { PreparacionComponent } from './pages/tienda/preparacion/preparacion.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    TiendaComponent,
    LoginComponent,
    DashboardComponent,
    OfertasComponent,
    PagosComponent,
    PreparacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule //para tener comunicación con un servicio
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
