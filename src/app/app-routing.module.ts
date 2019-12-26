import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerationComponent } from './generation/generation.component';
import { TabInfoComponent } from './tab-info/tab-info.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', component: GenerationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
