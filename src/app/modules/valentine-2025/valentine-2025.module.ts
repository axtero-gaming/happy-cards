import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FortawesomeModule } from '@shared/fortawesome.module';
import { SharedModule } from '@shared/shared.module';

// Components
import { ValentinePageComponent } from './components/valentine-page';
import { HeartComponent } from './components/heart';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, FortawesomeModule, SharedModule],
  declarations: [
    // Components
    ValentinePageComponent,
    HeartComponent,
  ],
  exports: [
    // Components
    ValentinePageComponent,
  ],
})
export class Valentine2025Module {}
