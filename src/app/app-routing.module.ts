import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrimaryComponent} from "./components/primary/primary.component";
import {SettingsComponent} from "./components/settings/settings/settings.component";

const routes: Routes = [
  {path: '', component: PrimaryComponent},
  {path: 'settings', component: SettingsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
