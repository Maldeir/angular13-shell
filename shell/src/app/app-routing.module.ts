import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

//MODIFICATION: ADD ROUTE
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './routes',
    }).then((m) => m.BASE_ROUTES),
  },
  // {
  //   path: 'booking',
  //   loadChildren: () => import('comp/routes').then(m => m.BASE_ROUTES)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
