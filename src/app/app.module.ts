import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    TodosComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
