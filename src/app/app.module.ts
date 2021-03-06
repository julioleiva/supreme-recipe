
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
