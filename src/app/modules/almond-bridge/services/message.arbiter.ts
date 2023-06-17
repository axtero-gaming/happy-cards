import { Injectable } from '@angular/core';
import PubNub from 'pubnub';
import { v4 as uuidV4 } from 'uuid';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { BaseManager } from '../../../shared';
import { Enums, Interfaces } from '../shared';

@Injectable()
export class MessagesArbiter extends BaseManager {
  private pubNub: PubNub;
  private readonly PubNubUserIdKey = `PubNubUserId`;

  private globalChannel: string = `meoChannel`;

  private sjConnection = new BehaviorSubject<boolean>(false);
  private sjNotif: Subject<Interfaces.PubNubMessage> = new Subject();

  public sender: string;

  constructor () {
    super();
  }

  /**
   * Returns message arbiter connection observable.
   *
   * @return {Observable<number>}
   */
  getConnectionObserver (): Observable<boolean> {
    return this.sjConnection.asObservable();
  }

  /**
   * Returns notification observable.
   *
   * @return {Observable<number>}
   */
  getObserver (): Observable<Interfaces.PubNubMessage> {
    return this.sjNotif.asObservable();
  }

  /**
   * Inits messages arbiter:
   *  - creates connector to bridge;
   *  - inits message listener.
   *
   * @return {void}
   */
  connect (): void {
    this.sender = this.localStorageService.getValue<string>(this.PubNubUserIdKey);
    if (_.isNil(this.sender) === true) {
      this.sender = uuidV4();
      this.localStorageService.setValue(this.PubNubUserIdKey, this.sender);
    }

    this.pubNub = new PubNub({
      publishKey: 'pub-c-33fe0ceb-e82a-4539-9c78-ed774e2360de',
      subscribeKey: 'sub-c-77abc81a-9281-4a09-90c8-7293c2567c0d',
      userId: this.sender,
    });

    const listener = {
      status: (statusEvent: PubNub.StatusEvent) => {
        if (statusEvent.category === `PNConnectedCategory`
          && statusEvent.operation === 'PNSubscribeOperation'
          && _.includes(statusEvent.subscribedChannels, this.globalChannel)) {
          this.sjConnection.next(true);
        }
        console.log(`------ Connection`, statusEvent);
      },
      message: (messageEvent: PubNub.MessageEvent) => {
        this.processMessage(messageEvent);
      },
      presence: (presenceEvent) => {
      },
    };
    this.pubNub.addListener(listener);

    this.pubNub.subscribe({
      channels: [this.globalChannel],
    });
  }

  /**
   * Handles all messages from the connected channels.
   *
   * @param  {PubNub.MessageEvent} messageEvent
   * @return {void}
   */
  private processMessage (messageEvent: PubNub.MessageEvent): void {
    console.log(`-------`, messageEvent);
    if (messageEvent.message.type === Enums.MessageType.TextMessage) {
      this.sjNotif.next({
        sender: messageEvent.publisher,
        type: messageEvent.message.type,
        payload: messageEvent.message.payload,
      });
    }
  }

  /**
   * Sends the message to global channel.
   *
   * @return {void}
   */
  async publishMessage (type: string, payload: any): Promise<void> {
    await this.pubNub.publish({
      channel : this.globalChannel,
      message: {
        type: type,
        payload: payload,
      },
    });
  }
}
