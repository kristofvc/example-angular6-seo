import { NgModule } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserTransferStateModule,
        BrowserAnimationsModule,
        AppModule
    ],
    providers: [],
    bootstrap: [AppComponent],

})
export class AppBrowserModule {
}