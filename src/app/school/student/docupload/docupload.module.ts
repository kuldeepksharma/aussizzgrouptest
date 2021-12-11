import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DocuploadPage } from './docupload.page';
import { ToastModule } from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';
import { FileUploadModule } from 'primeng/fileupload';

const routes: Routes = [
  {
    path: '',
    component: DocuploadPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    FileUploadModule,
    MultiSelectModule,
    IonicModule,
    ToastModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DocuploadPage]
})
export class DocuploadPageModule { }
