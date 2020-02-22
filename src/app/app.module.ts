import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SearchEngineComponent } from 'src/pages/searchEngine/searchEngine.component';
import { FooterMenuComponent } from './components/footerMenu/footerMenu.component';
import { NavigationMenuComponent } from './components/navigationMenu/navigationMenu.component';
import { LandingPageComponent } from 'src/pages/landingPage/landingPage.component';
import { SliderComponent } from './components/slickSlider/slider.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { LoginPageComponent } from 'src/pages/login/login.component';
import { RegisterPageComponent } from 'src/pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClinicDetailPageComponent } from 'src/pages/clinicDetail/clinicDetail.component';
import { ClientDetailPageComponent } from 'src/pages/clientDetail/clientDetail.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.intercepetor';
import { AlertComponent } from './components/alert/alert.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    SearchEngineComponent,
    FooterMenuComponent,
    NavigationMenuComponent,
    LandingPageComponent,
    SliderComponent,
    NewsletterComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ClientDetailPageComponent,
    ClinicDetailPageComponent,
    TabsComponent,
    TabComponent,
    AlertComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
],
  bootstrap: [AppComponent,  FooterMenuComponent, NavigationMenuComponent,
    ]
})
export class AppModule { }
