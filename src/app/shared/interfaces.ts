
export interface ClickDelegateEvent {
  /**
   * data-id attribute
   */
  id: string;
  /**
   * data-type attribute
   */
  type: string;
  /**
   * CSS class.
   */
   selector: string;
  /**
   * Native mouse event.
   */
  dataset: DOMStringMap;
  /**
   * Native mouse event.
   */
  event: MouseEvent;
}

export interface SelectOption {
  id: string;
  value: string;
  hint: string;
}

/**
 * Words Square Game
 */

export interface Coord2D {
  x: number;
  y: number;
}

export interface FieldDescriptor {
  field: string[][];
  words: WordDescriptor[];
}

export interface WordDescriptor {
  word: string;
  coords: Coord2D[];
}
