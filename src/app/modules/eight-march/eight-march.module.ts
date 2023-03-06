import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FortawesomeModule } from '@shared/fortawesome.module';
import { SharedModule } from '@shared/shared.module';

// Components
import { EightMarchPageComponent } from './components/eight-march-page';
import { FlowerSummerComponent } from './components/flower-summer';
import { FlowerWinterComponent } from './components/flower-winter';
import { SpaceOdysseyComponent } from './components/space-odyssey';
import { SpaceOdysseyUserShipComponent } from './components/space-odyssey-user-ship';
import { SpaceOdysseyAsteroidComponent } from './components/space-odyssey-asteroid';
import { ShipPositionArbiter } from './services/ship-position.arbiter';
import { ShipMovementDirective } from './directives/ship-movement.directive';
import { FlowerSummerV2Component } from './components/flower-summer-v2';
import { FlowerBeachComponent } from './components/flower-beach';
import { FlowerUnderWaterComponent } from './components/flower-under-water';
import { FlowerSummerV3Component } from './components/flower-summer-v3';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FortawesomeModule,
    SharedModule,
  ],
  declarations: [
    // Components
    EightMarchPageComponent,
    FlowerSummerComponent,
    FlowerSummerV2Component,
    FlowerWinterComponent,
    SpaceOdysseyComponent,
    SpaceOdysseyUserShipComponent,
    SpaceOdysseyAsteroidComponent,
    ShipMovementDirective,
    FlowerBeachComponent,
    FlowerUnderWaterComponent,
    FlowerSummerV3Component,
  ],
  providers: [
    ShipPositionArbiter,
  ],
  exports: [
    // Components
    EightMarchPageComponent,
  ],
})
export class EightMarchModule { }
