import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

import { BaseComponent } from '@shared/base';

import { MessagesArbiter } from '../../services/message.arbiter';
import { Enums, Interfaces } from '../../shared';

const PossibleMessages = [
  `Мяу`, `Мяу-мяу-мяу`, `Мяяяяяуууууу!!!`,
  `Мяу?`, `Миииииииууууу`, `Миу-миу`,
  `Ме-оу`, `Ми-ми-ми-ми`, `Мяу-мяу`,
  `Мяу!`, `Миу`, `Мияу`, `Ме-хе-хе`,
  `Мя-хя-хя`, `Ми-хи-хи-хи`, `Мррр`,
  `Мяу...`, `Мя***`, `МЯУ`, `Мяу.`,
];
const Emoji = [
  `:)`, `:(`, `:O`, `\\(^o^)/`,
  `(╯°□°）╯︵ ┻━┻`, `(ง’̀-‘́)ง`,
  `¯\_(ツ)_/¯`, `(=^ェ^=)`, `( •_•)`,
  `~(˘▾˘~)`, `｡^‿^｡`,
];

@Component({
  selector: 'ag-almond-bridge',
  templateUrl: './almond-bridge.component.html',
  styleUrls: [ './almond-bridge.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlmondBridgeComponent extends BaseComponent implements OnInit, AfterViewInit {
  public connectionIsEstablished = false;
  public connectionLoaderIsVisible = false;
  public connectionLoaderIsEnded = false;
  public messages: Interfaces.PubNubMessage[] = [];
  public currentUserId: string = 'qweq';
  public pageIsVisible: boolean = true;
  public numOfNewMessages: number = 0;

  public visiblePossibleMessages: string[] = [];
  public visibleEmojis: string[] = [];

  @ViewChild('messageBox') private messageBoxElr: ElementRef;

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
    this.updateTitle();
    this.updatePossibleMessages();

    const connectionObserver$ = this.messagesArbiter.getConnectionObserver()
      .subscribe((connectionIsEstablished) => {
        this.connectionIsEstablished = connectionIsEstablished;
        if (this.connectionLoaderIsEnded === true) {
          this.connectionLoaderIsVisible = false;
        }
        this.forceRender();
      });
    this.subscribe(connectionObserver$);

    const messageObserver$ = this.messagesArbiter.getObserver()
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      .subscribe(async (message) => {
        if (message.type === Enums.MessageType.TextMessage) {
          await this.processTextMessage(message);
        }
        this.forceRender();
      });
    this.subscribe(messageObserver$);
  }

  ngAfterViewInit (): void {
    this.forceRender();
  }

  @HostListener('document:visibilitychange')
  onVisibilityChange (): void {
    this.pageIsVisible = document.hidden === false;
    this.numOfNewMessages = 0;
    this.updateTitle();
  }

  /**
   * Process text message: inserts it into template and scroll container.
   *
   * @param  {Interfaces.PubNubMessage} message
   * @return {Promise<void>}
   */
  async processTextMessage (message: Interfaces.PubNubMessage): Promise<void> {
    this.messages.push(message);
    if (this.pageIsVisible === false) {
      this.numOfNewMessages += 1;
      this.updateTitle();
    }
    this.forceRender();

    await this.scrollChatContainerToBottom();
  }

  /**
   * Updates the app's title w/ set of notification.
   *
   * @return {void}
   */
  updateTitle (): void {
    if (this.numOfNewMessages === 0) {
      this.titleService.setTitle(`AlmondBridge`);
    } else {
      this.titleService.setTitle(`(${this.numOfNewMessages}) AlmondBridge`);
    }
  }

  /**
   * Scrolls chat to the bottom.
   *
   * @return {Promise<void>}
   */
  async scrollChatContainerToBottom (): Promise<void> {
    if (_.isNil(this.messageBoxElr) === true) {
      return;
    }

    this.messageBoxElr.nativeElement.scrollTop = this.messageBoxElr.nativeElement.scrollHeight;
    await this.waitTimer(0);
    this.messageBoxElr.nativeElement.scrollTop = this.messageBoxElr.nativeElement.scrollHeight;
    this.forceRender();
  }

  /**
   * Establish connection w/ message arbiter.
   *
   * @return {void}
   */
  async onClickBridgeConnector (): Promise<void> {
    this.connectionLoaderIsVisible = true;
    this.connectionLoaderIsEnded = false;
    this.messagesArbiter.connect();
    this.currentUserId = this.messagesArbiter.sender;
    this.forceRender();

    await this.waitTimer(2400);
    await this.messagesArbiter.initChat();

    this.connectionLoaderIsEnded = true;
    if (this.connectionIsEstablished === true) {
      this.connectionLoaderIsVisible = false;
      this.forceRender();
    }
  }

  /**
   * Updates the set of visible messages.
   *
   * @return {void}
   */
  updatePossibleMessages (): void {
    this.visiblePossibleMessages = _.take(_.shuffle(PossibleMessages), 4);
    this.visibleEmojis = _.take(_.shuffle(Emoji), 5);
    this.render(`visiblePossibleMessages`, this.visiblePossibleMessages);
  }

  /**
   * Sends active message.
   *
   * @return {Promise<void>}
   */
  async onClickSendMessage (message: string): Promise<void> {
    this.messages.push({
      type: Enums.MessageType.TextMessage,
      sender: this.messagesArbiter.sender,
      payload: message,
    });
    this.updatePossibleMessages();
    this.forceRender();

    await this.scrollChatContainerToBottom();

    await this.messagesArbiter.publishMessage(Enums.MessageType.TextMessage, message);
    this.forceRender();
  }
}
