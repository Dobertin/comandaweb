import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // 👈 Importamos las rutas correctamente

bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routes) // 👈 Usamos la variable correcta de rutas
  ]
}).catch((err) => console.error(err));
