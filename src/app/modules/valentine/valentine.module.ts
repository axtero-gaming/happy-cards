import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FortawesomeModule } from '@shared/fortawesome.module';
import { SharedModule } from '@shared/shared.module';

// Components
import { TimerComponent } from './components/timer';
import { CatComponent } from './components/cat';
import { LoveComponent } from './components/love';
import { ValentinePageComponent } from './components/valentine-page';

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
    TimerComponent,
    CatComponent,
    LoveComponent,
    ValentinePageComponent,
  ],
  exports: [
    // Components
    ValentinePageComponent,
  ],
})
export class ValentineModule { }
