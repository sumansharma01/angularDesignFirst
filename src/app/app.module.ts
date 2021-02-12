import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UppercardsComponent } from './uppercards/uppercards.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BelownavbarComponent } from './belownavbar/belownavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UppercardsComponent,
    NavbarComponent,
    SidebarComponent,
    BelownavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
