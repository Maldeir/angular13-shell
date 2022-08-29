import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//MODIFICATION: ADD ROUTE
const routes: Routes = [
  {
    path: 'comp',
    loadChildren: () => import('comp/Module').then(m => m.CompsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
