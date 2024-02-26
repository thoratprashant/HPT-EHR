import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { PracticeAdminComponent } from './practice-admin/practice-admin.component';

const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'sample-page1',
      //   component: SamplePage1Component,
      //   // data: {
      //   //   title: "Sample-page1",
      //   //   breadcrumb: "Default",
      //   // }
      // },
      {
        path: 'practice-admin',
        component: PracticeAdminComponent, 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAdminRoutingModule { }
