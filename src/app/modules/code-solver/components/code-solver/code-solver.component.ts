import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';

import { BaseComponent } from '@shared/base';

@Component({
  selector: 'ag-code-solver',
  templateUrl: './code-solver.component.html',
  styleUrls: [ './code-solver.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeSolverComponent extends BaseComponent implements OnInit, AfterViewInit {

  constructor (
    // Angular
    protected changeDetection: ChangeDetectorRef,
  ) {
    super(changeDetection);
  }

  ngOnInit (
  ): void {
  }

  ngAfterViewInit (): void {
    this.forceRender();
  }
}
