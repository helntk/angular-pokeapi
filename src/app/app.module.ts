import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationComponent } from './generation/generation.component';
import { TabInfoComponent } from './tab-info/tab-info.component';
import { InfoComponent } from './info/info.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon.service';
@NgModule({
  declarations: [
    AppComponent,
    GenerationComponent,
    TabInfoComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
