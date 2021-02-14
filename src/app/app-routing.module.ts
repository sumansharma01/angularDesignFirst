import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './animations/animations.component';
import { AppComponent } from './app.component';
import { BordersComponent } from './borders/borders.component';
import { ColorsComponent } from './colors/colors.component';
import { OtherComponent } from './other/other.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'border',
    component:BordersComponent
  },
  {
    path:'color',
    component:ColorsComponent
  },
  {
    path:'other',
    component:OtherComponent
  },
  {
    path:'animation',
    component:AnimationsComponent
  },
  {
    path:'table',
    component:TablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
