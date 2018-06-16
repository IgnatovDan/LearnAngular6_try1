import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyheroesComponent } from './myheroes/myheroes.component';
/*
You generally don't declare components in a routing module so you can delete the @NgModule.declarations array and delete CommonModule references too.
import { CommonModule } from '@angular/common';
*/

// You intend to navigate to the HeroesComponent when the URL is something like localhost:4200/heroes.
const routes: Routes = [
  { path: 'heroes', component: MyheroesComponent },
];

@NgModule({
  exports : [ RouterModule ],
  imports : [ RouterModule.forRoot(routes) ]
  /*
  You generally don't declare components in a routing module so you can delete the @NgModule.declarations array and delete CommonModule references too.
  imports: [
    CommonModule
  ],
  declarations: []*/
})
export class AppRoutingModule {
}
