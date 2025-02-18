import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComandaMesaComponent } from './pages/comanda-mesa/comanda-mesa.component';
import { ComandaIngresoComponent } from './pages/comanda-ingreso/comanda-ingreso.component';
import { RegistroProductoComponent } from './pages/registro-producto/registro-producto.component';
import { RegistroPersonalComponent } from './pages/registro-personal/registro-personal.component';
import { ReporteComandaComponent } from './pages/reporte-comanda/reporte-comanda.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página principal
  { path: 'comanda-ingreso', component: ComandaMesaComponent,
    children: [
      { path: 'ingreso', component: ComandaIngresoComponent }
    ]
   },
   { path: 'registros-producto', component:RegistroProductoComponent },
   { path: 'registros-personal', component:RegistroPersonalComponent },
   { path: 'reporte-comanda', component:ReporteComandaComponent },
   { path: 'help', component:AyudaComponent },
   { path: '**', component:NotfoundComponent },
];
