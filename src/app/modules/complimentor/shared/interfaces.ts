import { MessageType } from './enums';

export interface PubNubMessage <TPayload = any> {
  sender: string;
  type: MessageType;
  payload: TPayload;
}
