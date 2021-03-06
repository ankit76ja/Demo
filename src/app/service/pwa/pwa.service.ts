import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Injectable()
export class PwaService {
  promptEvent:any;
  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => {
      if (confirm("New version available. Load New Version?")) {
        window.location.reload();
      }
    });
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }
}