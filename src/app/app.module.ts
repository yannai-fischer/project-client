import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriteriaComponent } from './components/criteria/criteria.component';
import {PrimaryComponent} from "./components/primary/primary.component";
import {CompanyBusinessCardComponent} from "./components/company-business-card/company-business-card.component";
import {SettingsComponent} from "./components/settings/settings/settings.component";

@NgModule({
  declarations: [
    AppComponent,
    CriteriaComponent,
    CompanyBusinessCardComponent,
    PrimaryComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
