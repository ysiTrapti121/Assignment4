import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodySectionComponent } from './body-section/body-section.component';
import { TaskFormComponent } from './task-form/task-form.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './body-section/search/search.component';
import { Routes, RouterModule } from '@angular/router';
import { Router } from 'express';
import { TaskDetailsComponent } from './task-details/task-details.component';

const routes :Routes =[
  {path: '', component: BodySectionComponent},
     {path: 'Home', component: BodySectionComponent},
     {path: 'Task_Details', component: TaskFormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodySectionComponent,
    TaskFormComponent,
    SearchComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
