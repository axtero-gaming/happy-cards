import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FortawesomeModule } from '@shared/fortawesome.module';
import { SharedModule } from '@shared/shared.module';

// Services
import { MessagesArbiter } from './services/message.arbiter';

// Components
import { AprilHbComponent } from './components/april-hb';

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
    AprilHbComponent,
  ],
  providers: [
    MessagesArbiter,
  ],
  exports: [
    // Components
    AprilHbComponent,
  ],
})
export class AprilHbModule { }
