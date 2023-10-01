import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FortawesomeModule } from '@shared/fortawesome.module';
import { SharedModule } from '@shared/shared.module';

// Services
import { MessagesArbiter } from './services/message.arbiter';

// Components
import { ComplimentorComponent } from './components/complimentor';

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
    ComplimentorComponent,
  ],
  providers: [
    MessagesArbiter,
  ],
  exports: [
    // Components
    ComplimentorComponent,
  ],
})
export class ComplimentorModule { }
