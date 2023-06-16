import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FortawesomeModule } from '@shared/fortawesome.module';
import { SharedModule } from '@shared/shared.module';

// Components
import { CodeSolverComponent } from './components/code-solver';
import { BugMemFixerComponent } from './components/bug-mem-fixer';
import { BugResizerComponent } from './components/bug-resizer';

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
    BugMemFixerComponent,
    BugResizerComponent,
  ],
  providers: [
  ],
  exports: [
    // Components
    CodeSolverComponent,
  ],
})
export class CodeSolverModule { }
