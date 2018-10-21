import { Component } from '@angular/core';
import { SeoService } from "./seo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example-angular6-seo';

  constructor(private seo: SeoService) {
    this.seo.setSeoData(
      'Cool app',
      'Hahahahaha, nice one!'
    );
  }
}
