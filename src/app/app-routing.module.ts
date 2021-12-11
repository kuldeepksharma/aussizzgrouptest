import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },


  { path: 'student',
   loadChildren: './school/student/student.module#StudentPageModule' },
  { path: 'school', loadChildren: './school/school.module#SchoolPageModule' },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
