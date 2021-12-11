import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {ContextMenuModule} from 'primeng/contextmenu';
import { IonicModule } from '@ionic/angular';

import { TextoperationPage } from './textoperation.page';

const routes: Routes = [
  {
    path: '',
    component: TextoperationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContextMenuModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TextoperationPage]
})
export class TextoperationPageModule {}
