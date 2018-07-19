import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'

import {alltodosfromreducer} from './redux/reducer'



import { AppComponent } from './app.component';
//import { todoServiceService } from './services/todo-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({alltodosfromreducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
