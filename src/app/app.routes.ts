import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComandaMesaComponent } from './pages/comanda-mesa/comanda-mesa.component';
import { ComandaIngresoComponent } from './pages/comanda-ingreso/comanda-ingreso.component';
import { RegistroProductoComponent } from './pages/registro-producto/registro-producto.component';
import { RegistroPersonalComponent } from './pages/registro-personal/registro-personal.component';
import { ReporteComandaComponent } from './pages/reporte-comanda/reporte-comanda.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { ComandaComponent } from './pages/comanda/comanda.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [  
  { path: 'login', component: LoginComponent },

  // Rutas protegidas con AuthGuard
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'comanda', component: ComandaComponent, canActivate: [AuthGuard],
    children: [
      { path: 'mesa', component: ComandaMesaComponent, canActivate: [AuthGuard] },
      { path: 'ingreso', component: ComandaIngresoComponent, canActivate: [AuthGuard] }
    ]
   },
   { path: 'registros-producto', component: RegistroProductoComponent, canActivate: [AuthGuard] },
   { path: 'registros-personal', component: RegistroPersonalComponent, canActivate: [AuthGuard] },
   { path: 'reporte-comanda', component: ReporteComandaComponent, canActivate: [AuthGuard] },
   { path: 'help', component: AyudaComponent },

   // Si no existe el token, redirige al login automáticamente
   { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: '**', component: NotfoundComponent },
];
