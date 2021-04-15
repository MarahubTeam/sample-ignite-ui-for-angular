import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { GridComponent } from './components/grid/grid.component';
import { NavDrawerSimpleComponent } from "./components/nav/nav.component";
import { FormComponent } from "./components/form/form.component";
import {
  IgxNavigationDrawerModule,
  IgxToggleModule,
  IgxAvatarModule,
  IgxBadgeModule,
  IgxButtonModule,
  IgxGridModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxProgressBarModule,
  IgxRippleModule,
  IgxSwitchModule,
  IgxCheckboxModule,
  IgxRadioModule
} from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    NavDrawerSimpleComponent,
    FormComponent
  ],
  imports: [
    IgxPreventDocumentScrollModule,
    BrowserModule,
    BrowserAnimationsModule,
    IgxNavigationDrawerModule,
    AppRoutingModule,
    IgxToggleModule,
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxCheckboxModule,
    IgxRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
