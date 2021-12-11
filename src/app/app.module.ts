import { NgModule, NO_ERRORS_SCHEMA ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';


import {CarouselModule} from 'primeng/carousel';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FileUploadModule} from 'primeng/fileupload';
import {MessageModule} from 'primeng/message';
import {TableModule} from 'primeng/table';
import { DropdownModule } from 'primeng/primeng';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';
import {CalendarModule} from 'primeng/calendar';
import {ToastModule} from 'primeng/toast';
import {SidebarModule} from 'primeng/sidebar';
import {CheckboxModule} from 'primeng/checkbox';
import {ProgressBarModule} from 'primeng/progressbar';
import {MultiSelectModule} from 'primeng/multiselect';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ChartModule} from 'primeng/chart';
import {MessageService} from 'primeng/api';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DataViewModule} from 'primeng/dataview';

import {ToggleButtonModule} from 'primeng/togglebutton';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TabViewModule} from 'primeng/tabview';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import {NgxPrintModule} from 'ngx-print';

import {OrganizationChartModule} from 'primeng/organizationchart';
import {AutoCompleteModule} from 'primeng/autocomplete';


@NgModule({
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    HttpClientModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
     ChartModule,
     AutoCompleteModule,
     OrganizationChartModule,
     FileUploadModule,
     SuperTabsModule.forRoot(),
     TabViewModule,
     RadioButtonModule,
     NgxPrintModule,
     TableModule,
     ToastModule,
     ToggleButtonModule,
     CarouselModule,
     ButtonModule,
     BrowserAnimationsModule,
     DropdownModule,
     OverlayPanelModule,
     MultiSelectModule,
     DialogModule,
     CalendarModule,
     MessageModule,
     SidebarModule,
     ProgressBarModule,
     CheckboxModule,
     PanelModule,
     DynamicDialogModule,
     CardModule,
     DataViewModule,
     ProgressSpinnerModule,
      ServiceWorkerModule.register('ngsw-worker.js',
     { enabled: environment.production }),],
  providers: [
    StatusBar,
    TableModule,
    MessageService,
    File,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule {
  constructor() {
}
}
