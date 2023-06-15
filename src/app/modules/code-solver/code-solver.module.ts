import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FortawesomeModule } from '@shared/fortawesome.module';
import { SharedModule } from '@shared/shared.module';

// Components
import { CodeSolverComponent } from './components/code-solver';

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
    CodeSolverComponent,
  ],
  providers: [
  ],
  exports: [
    // Components
    CodeSolverComponent,
  ],
})
export class CodeSolverModule { }
