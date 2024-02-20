//app-routing.module.ts:
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user_module',
    loadChildren: () => import('./Modules/user-module/user-module.module').then(m => m.UserModuleModule)
  },
  {
    path: '',
    redirectTo: 'user_module',
    pathMatch: 'full'
  },
  { path: 'admin', loadChildren: () => import('./Modules/admin/admin.module').then(m => m.AdminModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
