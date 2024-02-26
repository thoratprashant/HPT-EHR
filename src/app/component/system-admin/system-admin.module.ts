import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { SystemAdminRoutingModule } from './system-admin-routing.module';
import { PracticeAdminComponent } from './user-managment/practice-admin/practice-admin.component';


@NgModule({
  declarations: [
    PracticeAdminComponent 
  ],
  imports: [
    CommonModule,
    SystemAdminRoutingModule,
  ]
})
export class SystemAdminModule { }
