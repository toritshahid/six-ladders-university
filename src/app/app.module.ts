import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegeDashboardModule } from './_modules/college-dashboard/college-dashboard.module';
import { HeaderComponent } from './_modules/header/header.component';
import { FooterComponent } from './_modules/footer/footer.component';
import { SidenavbarModule } from './_modules/sidenavbar/sidenavbar.module';
import { SidenavbarComponent } from './_modules/sidenavbar/sidenavbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollegeDashboardModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
