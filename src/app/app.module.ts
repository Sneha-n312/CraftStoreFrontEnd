import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Signup1Component } from './signup1/signup1.component';
import { Signup2Component } from './signup2/signup2.component';
import { SigninComponent } from './signin/signin.component';
import { ServicesComponent } from './services/services.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpformComponent } from './spform/spform.component';

import { RequestformComponent } from './requestform/requestform.component';
import { RequestserviceComponent } from './requestservice/requestservice.component';
import { OrderformComponent } from './orderform/orderform.component';
import { OrderserviceComponent } from './orderservice/orderservice.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Signup1Component,
    Signup2Component,
    SigninComponent,
    ServicesComponent,
    SpformComponent,
    
    RequestformComponent,
    RequestserviceComponent,
    OrderformComponent,
    OrderserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
