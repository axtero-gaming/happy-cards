import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';

import { BaseComponent } from '@shared/base';

const BaseRepairPhrases = [
  'Выбираем как чинить...',
  'Хммм...',
  'Эстимируем время ремонта...',
  'Вычисляем оптимальный алгоритм...',
  'Строим AVL-дерево...',
  'Нет...',
  'Строим AST-дерево...',
  'Чиним...',
  'Ещё чиним...',
  'Чёёёёрт...',
  'Чёрт, чёрт, чёрт...',
  'Призываем духов на помощь...',
  'Призываем Серёгу...',
  'Блэт... Серёга! Куда!!!',
  'Изгоняем Серёгу...',
  'Призываем Олега...',
  'Чиним...',
  'Изгоняем нечисть...',
  'Благодарим духов...',
  'Отправляем духов на покой...',
  'Собираем решение...',
  'Готово!',
];

const TurboRepairPhrases = [
  'Выбираем как чинить...',
  'А хрен с ним!',
  'Вызываю Андрея!',
  'Готово!',
];

const MemFiles = [
  'image3.gif',
  'image9.gif',
  'image10.gif',
  'image13.gif',
  'image2.gif',
  'image1.gif',
  'image11.gif',
  'image4.gif',
  'image14.gif',
  'image5.gif',
  'image12.gif',
  'image7.gif',
  'image15.gif',
  'image8.gif',
  'image6.gif',
];

@Component({
  selector: 'ag-bug-mem-fixer',
  templateUrl: './bug-mem-fixer.component.html',
  styleUrls: [ './bug-mem-fixer.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BugMemFixerComponent extends BaseComponent implements OnInit, AfterViewInit {
  public userCode: string;
  public repairInProgress: boolean = false;
  public turboMode: boolean = false;
  public repairPhrase: string;
  public repairButtonLabel: string;
  public memURL: string;
  private repairNumber = 0;

  private TurboButtonKey = 'FullRepairWas';
  public turboButtonIsVisible = false;

  constructor (
    // Angular
    protected changeDetection: ChangeDetectorRef,
  ) {
    super(changeDetection);
  }

  ngOnInit (
  ): void {
    this.turboButtonIsVisible = this.localStorageService.getValue(this.TurboButtonKey) ?? false;
    if (this.turboButtonIsVisible === true) {
      this.turboMode = true;
    }

    this.repairButtonLabel = 'Чинить';
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
  onClickRepair (): void {
    if (_.isEmpty(this.userCode) === true || this.repairInProgress === true) {
      return;
    }

    this.repairInProgress = true;
    this.repairButtonLabel = 'Чиним...';
    this.forceRender();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.startRepair();
  }

  /**
   * Starts repair process. Changes the repair messages.
   *
   * @return {Promise<void>}
   */
  async startRepair (): Promise<void> {
    const RepairPhrases = this.turboMode === true ? TurboRepairPhrases : BaseRepairPhrases;
    if (this.repairNumber < 1) {
      for (const repairPhrase of RepairPhrases) {
        this.repairPhrase = repairPhrase;
        this.forceRender();
        await this.waitTimer(2000);
      }
    } else {
      this.repairPhrase = `Готово!`;
      this.forceRender();
      await this.waitTimer(1000);
    }

    if (this.turboMode === true) {
      this.repairNumber += 1;
    }

    this.repairPhrase = '';
    this.localStorageService.setValue(this.TurboButtonKey, true);
    this.turboButtonIsVisible = true;
    this.turboMode = true;
    this.repairButtonLabel = 'Повторим?';
    this.repairInProgress = false;

    this.forceRender();
    this.setupNewMem();
  }

  /**
   * Setup the mem image file.
   *
   * @return {void}
   */
  setupNewMem (): void {
    const MemStorageKey = 'MemIndex';
    const memIndex = this.localStorageService.getNumber(MemStorageKey, 0);

    this.memURL = MemFiles[memIndex];

    this.localStorageService.setValue(MemStorageKey, memIndex + 1 >= MemFiles.length ? 0 : memIndex + 1);
    this.forceRender();
  }
}
