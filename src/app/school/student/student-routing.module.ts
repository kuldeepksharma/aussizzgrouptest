import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentPage } from './student.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: StudentPage,
    children: [
      {
        path: 'docupload',
        children: [
          {
            path: '',
            loadChildren: './docupload/docupload.module#DocuploadPageModule'
          }
        ]
      },

      {
        path: 'textoperation',
        children: [
          {
            path: '',
            loadChildren: './textoperation/textoperation.module#TextoperationPageModule'
          }
        ]
      },

      {
        path: '',
        redirectTo: '/student/tabs/docupload',
        pathMatch: 'Full'
      }
    ]
  },
  {
      path: '',
      redirectTo: '/student/tabs/docupload',
      pathMatch: 'Full'
    },   
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
