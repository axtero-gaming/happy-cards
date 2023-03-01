import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { WordsSquareFieldGeneratorManager } from '../../services/words-square-field-generator.manager';

import { BaseComponent } from '@shared/base';
import * as Interfaces from '@shared/interfaces';

@Component({
  selector: 'ag-word-square-game',
  templateUrl: './word-square-game.component.html',
  styleUrls: [ './word-square-game.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordSquareGameComponent extends BaseComponent implements OnInit {
  public fieldDescriptor: Interfaces.FieldDescriptor;

  constructor (
    // Angular
    protected changeDetection: ChangeDetectorRef,
  ) {
    super(changeDetection);
  }

  ngOnInit (
  ): void {
    const wordsSquareFieldGeneratorManager = new WordsSquareFieldGeneratorManager();

    this.fieldDescriptor = wordsSquareFieldGeneratorManager.genWordField(5);
    console.log(`--------`, this.fieldDescriptor);
    this.forceRender();
  }
}
