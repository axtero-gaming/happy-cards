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
// import { ValentineModule } from './modules/valentine/valentine.module';
// import { EightMarchModule } from './modules/eight-march/eight-march.module';
// import { CodeSolverModule } from './modules/code-solver/code-solver.module';
// import { AlmondBridgeModule } from './modules/almond-bridge/almond-bridge.module';
import { ComplimentorModule } from './modules/complimentor/complimentor.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FortawesomeModule,
    SharedModule,
    ComplimentorModule,
  ],
  declarations: [
    // Components
    AppComponent,
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
