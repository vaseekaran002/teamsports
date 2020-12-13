import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule,AppRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideBarComponent } from './components/slide-bar/slide-bar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {SidebarModule} from 'ng-sidebar';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
@NgModule({
  declarations: [
    AppComponent,
    AppRoutingComponents,
    HeaderComponent,
    SlideBarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    PageNotFoundComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SidebarModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
