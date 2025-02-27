import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FortawesomeModule } from '@shared/fortawesome.module';
import { SharedModule } from '@shared/shared.module';

// Services
import { MessagesArbiter } from './services/message.arbiter';

// Components
import { FlyingHeartComponent } from './components/flying-heart';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, FortawesomeModule, SharedModule],
  declarations: [
    // Components
    FlyingHeartComponent,
  ],
  providers: [MessagesArbiter],
  exports: [
    // Components
    FlyingHeartComponent,
  ],
})
export class FlyingHeartModule {}
