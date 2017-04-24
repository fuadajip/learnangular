import { Component, NgModule} from '@angular/core';
import { platformBrowserDynamic  } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { FormEvent } from "./form-event";


@Component({
    selector : 'root',
    template : '<form-event></form-event>',
})

export class App {}



@NgModule({
    declarations : [App, FormEvent],
    imports : [BrowserModule],
    bootstrap : [App]
})

export class AppModule{}
platformBrowserDynamic().bootstrapModule(AppModule);