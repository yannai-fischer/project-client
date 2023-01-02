import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriteriaComponent } from './components/criteria/criteria.component';
import {PrimaryComponent} from "./components/primary/primary.component";
import {CompanyBusinessCardComponent} from "./components/company-business-card/company-business-card.component";
import {SettingsComponent} from "./components/settings/settings/settings.component";
import {CapitaliseFirstLetterPipe} from "./pipes/capitalise-first-letter.pipe";
import {PrettifyFieldPipe} from "./pipes/prettify-field.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CriteriaComponent,
    CompanyBusinessCardComponent,
    PrimaryComponent,
    SettingsComponent,
    CapitaliseFirstLetterPipe,
    PrettifyFieldPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
