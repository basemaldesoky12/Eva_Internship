import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { BehaviourComponent1Component } from './behaviour-component1/behaviour-component1.component';
import { BehaviourComponent2Component } from './behaviour-component2/behaviour-component2.component';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './layout/view/view.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

import {AngularFireModule} from '@angular/fire/compat'
import { environment } from './enviroments/enviroment';
// import { firebaseConfig } from './enviroments/enviroment';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // ProductsComponent,
    BehaviourComponent1Component,
    BehaviourComponent2Component,
    ViewComponent,
    // WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
