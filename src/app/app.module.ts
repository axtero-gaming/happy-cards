import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FortawesomeModule } from './shared/fortawesome.module';
import { SharedModule } from './shared/shared.module';

// Services
import { DOMHelper } from '@core/dom.helper';

// State Store
import { StateStore } from '@core/state-store';

// Components
import { AppComponent } from './components/app';
import { TimerComponent } from './components/timer';
import { CatComponent } from './components/cat';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FortawesomeModule,
    SharedModule,
  ],
  declarations: [
    // Components
    AppComponent,
    TimerComponent,
    CatComponent,
  ],
  providers: [
    // Services
    DOMHelper,
    // State Store
    StateStore,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
