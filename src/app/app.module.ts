import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/login/login.module';
import { HomeModule } from './components/home/home.module';
import { RegisterModule } from './components/register/register.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from './components/navbar/navbar.module';
import { CarpageModule } from './components/carpage/carpage.module';
import { CarDetailsModule } from './components/car-details/car-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Built in components
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //My components
    LoginModule,
    HomeModule,
    RegisterModule,
    NavbarModule,
    CarpageModule,
    CarDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
