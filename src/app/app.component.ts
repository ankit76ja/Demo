import { Component } from '@angular/core';
import { PwaService } from './service/pwa/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoProject';
  constructor(public Pwa: PwaService) {}
  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }
}
