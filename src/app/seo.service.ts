import { Injectable } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { Globals } from "./globals";

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private titleService: Title, private meta: Meta, private globals: Globals) { }

  public setSeoData(title: string, description: string = '') {
    if (title === '') {
      title = this.globals.appName;
    } else {
      title = title + ' | ' + this.globals.appName;
    }

    this.titleService.setTitle(title);

    this.meta.updateTag({ property: 'og:title', content: title }, `property="og:title"`);
    this.meta.updateTag({ name: 'description', content: description }, `name="description"`);
    this.meta.updateTag({ property: 'og:description', content: description }, `property="og:description"`);
  }
}
