import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const modules = [
  ReactiveFormsModule,
  FormsModule,
  FontAwesomeModule,
];

// --- Components

const components = [
];

// --- Directives
import { KeyEventDirective } from './directives/key-event.directive';
import { ClickDelegateDirective } from './directives/click-delegate.directive';
import { OrientationChangeDirective } from './directives/orientation-change.directive';

const directives = [
  KeyEventDirective,
  ClickDelegateDirective,
  OrientationChangeDirective,
];

// --- Pipes
import { SafeHTMLPipe } from './pipes/safe-html.pipe';

const pipes = [
  SafeHTMLPipe,
];

@NgModule({
  declarations: [
    ...pipes,
    ...components,
    ...directives,
  ],
  imports: [
    CommonModule,
    ...modules,
  ],
  exports: [
    ...modules,
    ...pipes,
    ...components,
    ...directives,
  ],
})
export class SharedModule { }
