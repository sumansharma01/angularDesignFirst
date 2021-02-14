import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UppercardsComponent } from './uppercards/uppercards.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BelownavbarComponent } from './belownavbar/belownavbar.component';
import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';
import { AnimationsComponent } from './animations/animations.component';
import { OtherComponent } from './other/other.component';
import { TablesComponent } from './tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    UppercardsComponent,
    NavbarComponent,
    SidebarComponent,
    BelownavbarComponent,
    ColorsComponent,
    BordersComponent,
    AnimationsComponent,
    OtherComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
