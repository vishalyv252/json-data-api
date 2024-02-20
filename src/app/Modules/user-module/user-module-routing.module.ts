//user-module-routing.module.ts:
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModuleComponent } from './user-module.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { PhotosComponent } from './components/photos/photos.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DataUserIdComponent } from './components/data-user-id/data-user-id.component';

const routes: Routes = [
  { path: '', component: UserModuleComponent },
  { path: 'new_component', component: NewComponentComponent },
  { path: 'add_user', component: CreateUserComponent},
  { path: 'photos/:id', component: PhotosComponent},
  {
    path: 'data_user_id/:id',
    component: DataUserIdComponent
  },
  {
    path: 'comments/:id',
    component: CommentsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
