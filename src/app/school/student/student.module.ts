import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';
import { IonicModule } from '@ionic/angular';

import { StudentPage } from './student.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentRoutingModule
  ],
  declarations: [StudentPage]
})
export class StudentPageModule {}
