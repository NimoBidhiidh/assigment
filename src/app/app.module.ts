import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewlistComponent } from './newlist/newlist.component'
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
 
  { path: 'newitems',      component: NewlistComponent },
  {
    path: 'list',
    component: ListComponent,
    data: { title: ' List' }
  },
  {
    path:'',
    redirectTo: '/list',
    pathMatch: 'full'
  }
  
];




@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewlistComponent
    
    
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
