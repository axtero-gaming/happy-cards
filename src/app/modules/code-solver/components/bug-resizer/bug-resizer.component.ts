import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';

import { BaseComponent } from '@shared/base';

@Component({
  selector: 'ag-bug-resizer',
  templateUrl: './bug-resizer.component.html',
  styleUrls: [ './bug-resizer.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BugResizerComponent extends BaseComponent implements OnInit, AfterViewInit {
  public userCode: string;
  public repairInProgress: boolean = false;
  public reduceIsOver: boolean = false;
  public repairPhrase: string;
  public repairButtonLabel: string;

  constructor (
    // Angular
    protected changeDetection: ChangeDetectorRef,
  ) {
    super(changeDetection);
  }

  ngOnInit (
  ): void {
    this.repairButtonLabel = 'Начать';
  }

  ngAfterViewInit (): void {
    this.forceRender();
  }

  /**
   * Handles changes of text area to rerender view.
   *
   * @return {void}
   */
  onChangeTextarea (): void {
    this.forceRender();
  }

  /**
   * Handles `click` events on repair button. Starts repair process.
   *
   * @return {void}
   */
  async onClickRepair (): Promise<void> {
    if (this.reduceIsOver === true) {
      this.reduceIsOver = false;
      this.repairButtonLabel = 'Начать';
      this.userCode = '';
      this.forceRender();
      return;
    }

    if (_.isEmpty(this.userCode) === true || this.repairInProgress === true) {
      return;
    }

    this.repairInProgress = true;
    this.repairButtonLabel = '...';

    await this.setRepairPhrase(`Ищем баги...`);
    await this.setRepairPhrase(`Подключаем редусер...`);
    await this.setRepairPhrase(`Бжж-бжж-бжж...`);
    await this.setRepairPhrase(`Готово!`);
    this.repairInProgress = false;
    this.reduceIsOver = true;
    this.repairButtonLabel = 'Сброс';
    this.forceRender();
  }

  async setRepairPhrase (phrase: string): Promise<void> {
    this.repairPhrase = phrase;
    this.forceRender();
    await this.waitTimer(2000);
  }
}
