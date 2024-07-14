import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DOMHelper } from '@core/dom.helper';
import { StateStore } from '@core/state-store';
import { FortawesomeModule } from './shared/fortawesome.module';
import { SharedModule } from './shared/shared.module';

// Services

// State Store

// Components
import { AppComponent } from './components/app';
import { FlyingHeartModule } from './modules/flying-heart/flying-heart.module';
// import { ValentineModule } from './modules/valentine/valentine.module';
// import { EightMarchModule } from './modules/eight-march/eight-march.module';
// import { CodeSolverModule } from './modules/code-solver/code-solver.module';
// import { AlmondBridgeModule } from './modules/almond-bridge/almond-bridge.module';
// import { ComplimentorModule } from './modules/complimentor/complimentor.module';
// import { AprilHbModule } from './modules/april-hb/april-hb.module';
// import { NarkoFlowerModule } from './modules/narko-flower/narko-flower.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FortawesomeModule,
    SharedModule,
    // NarkoFlowerModule,
    FlyingHeartModule,
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
  bootstrap: [AppComponent],
})
export class AppModule {}
