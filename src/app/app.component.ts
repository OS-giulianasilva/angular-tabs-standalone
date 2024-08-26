import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonLabel, IonTab, IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonLabel, IonTab, IonTabs, IonTabBar, IonTabButton, IonIcon],
})
export class AppComponent {
  constructor() { }
}
