import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HeaderComponent } from './header/header.component';
import { environment } from '../environments/environment';
//MODIFICATION: ADD ROUTE
const routes: Routes = [
  {
    path: 'comp',
    loadChildren: () =>
      loadRemoteModule({
      type: 'module',
      remoteEntry: environment.component.url,
      exposedModule: './Module',
    }).then((m) => m.BaseCompModule)
  },
  {
    path: 'header',
    component: HeaderComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
