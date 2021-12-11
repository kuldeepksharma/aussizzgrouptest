import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Plugins, Capacitor } from '@capacitor/core';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  constructor() { }

  initializeApp() { }

  ngOnInit() { }

  ngOnDestroy() { }
}
