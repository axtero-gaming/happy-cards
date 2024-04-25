import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

import { BaseComponent } from '@shared/base';

import { MessagesArbiter } from '../../services/message.arbiter';

@Component({
  selector: 'ag-april-hb',
  templateUrl: './april-hb.component.html',
  styleUrls: [ './april-hb.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AprilHbComponent extends BaseComponent implements OnInit {
  constructor (
    // Angular
    protected changeDetection: ChangeDetectorRef,
    private titleService: Title,
    // Services
    private messagesArbiter: MessagesArbiter,
  ) {
    super(changeDetection);
  }

  ngOnInit (
  ): void {
  }
}
