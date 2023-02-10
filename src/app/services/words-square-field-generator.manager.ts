import * as Interfaces from '@shared/interfaces';
import * as Enums from '@shared/enums';
import * as Constants from '@shared/constants';
import { BaseManager } from '@shared/base';

export class WordsSquareFieldGeneratorManager extends BaseManager {
  private field: number[][];
  private wordLetterCoordsMap = new Map<number, Interfaces.Coord2D[]>();

  /**
   * Generates the new field w/ filled words.
   *
   * @param  {} fieldSize
   * @return {}
   */
  genWordField (fieldSize: number): Interfaces.FieldDescriptor {
    while (true) {
      const fieldIsCalculated = this.calcWordFieldPositions(fieldSize);
      if (fieldIsCalculated === true) {
        break;
      }
    }

    const words = _.shuffle(Constants.Words);
    const usedWords = [];
    const wordField: string[][] = [];
    const wordDescriptors: Interfaces.WordDescriptor[] = [];
    this.wordLetterCoordsMap.forEach((letterCoords) => {
      const wordForCell = _.find(words, (word) => {
        return word.length === letterCoords.length && _.includes(usedWords, word) === false;
      });

      _.forEach(letterCoords, (letterCoord, index) => {
        if (_.isNil(wordField[letterCoord.y]) === true) {
          wordField[letterCoord.y] = [];
        }

        wordField[letterCoord.y][letterCoord.x] = wordForCell[index];
      });

      usedWords.push(wordForCell);
      wordDescriptors.push({
        word: wordForCell,
        coords: letterCoords,
      });
    });

    return {
      field: wordField,
      words: wordDescriptors,
    };
  }

  /**
   * Generates the new field w/ words.
   *
   * @return {}
   */
  private calcWordFieldPositions (fieldSize: number): boolean {
    // Fill the field empty cells (w/o word)
    this.field = this.genEmptyField(fieldSize);

    let wordNumber = 1;
    this.wordLetterCoordsMap = new Map<number, Interfaces.Coord2D[]>();

    let emptyCellCoords: Interfaces.Coord2D;
    while (true) {
      // FYI: Start first word from the random position
      emptyCellCoords = _.isNil(emptyCellCoords) === true
        ? { x: this.getRandomInt(0, fieldSize), y: this.getRandomInt(0, fieldSize) }
        : this.findEmptyCell(this.field);

      if (_.isNil(emptyCellCoords) === true) {
        return true;
      }

      let x = emptyCellCoords.x, y = emptyCellCoords.y;
      this.field[y][x] = wordNumber;

      let currentWordSize = 1;
      const maxWordSizeWithFirst = this.wordLetterCoordsMap.size < 3
        ? Constants.MinWordSize + 2
        : Constants.MaxWordSize;
      const maxWordSize = this.getRandomInt(Constants.MinWordSize, maxWordSizeWithFirst);
      const wordsAroundSet = new Set<number>();
      const newWordCells: Interfaces.Coord2D[] = [emptyCellCoords];
      while (true) {
        // Save words around for cases when we can't build word > 3 chars
        wordsAroundSet.add(this.field[y]?.[x + 1]);
        wordsAroundSet.add(this.field[y + 1]?.[x]);
        wordsAroundSet.add(this.field[y]?.[x - 1]);
        wordsAroundSet.add(this.field[y - 1]?.[x]);

        // Find a next free cell (w/o char) by the random direction
        const nextDirection = this.getNextDirectionWithEmptyField({ x, y });

        // Set next char
        if (_.isNil(nextDirection) === false && currentWordSize < maxWordSize) {
          // Go to next direction
          if (nextDirection === Enums.Direction.Right) {
            x += 1;
          } else if (nextDirection === Enums.Direction.Bottom) {
            y += 1;
          } else if (nextDirection === Enums.Direction.Left) {
            x -= 1;
          } else if (nextDirection === Enums.Direction.Top) {
            y -= 1;
          }

          newWordCells.push({ x, y });
          this.field[y][x] = wordNumber;
          currentWordSize += 1;
          continue;
        }

        // FYI: Min word size is MIN chars
        if (currentWordSize >= Constants.MinWordSize) {
          this.wordLetterCoordsMap.set(wordNumber, newWordCells);
          break;
        }

        // Remove current word from list
        wordsAroundSet.delete(wordNumber);

        // Find words which can continue the current word
        const wordsWithPossibleConnection = this.getWordsWithPossibleConnection(newWordCells, wordsAroundSet);
        if (wordsWithPossibleConnection.length === 0) {
          return false;
        }

        // Find the shortest word among words around
        const shortestWord = _.minBy(wordsWithPossibleConnection, (wordAroundNumber) => {
          return this.wordLetterCoordsMap.get(wordAroundNumber).length;
        });

        this.addWordCellsToWord(shortestWord, newWordCells);
        break;
      }

      wordNumber += 1;
    }
  }

  /**
   * Takes the Set of words and checks if we can connect some word from this list w/ provided word cells.
   *
   * @param  {Interfaces.Coord2D[]} newWordCells
   * @param  {Set<number>} wordsAroundSet
   * @return {number[]}
   */
  getWordsWithPossibleConnection (newWordCells: Interfaces.Coord2D[], wordsAroundSet: Set<number>): number[] {
    // Get start and end cells of the word
    const startNewWordCell = _.head(newWordCells);
    const endNewWordCell = _.last(newWordCells);

    const wordsAroundNumbers = _.compact(Array.from(wordsAroundSet.values()));
    const allowedWordsAroundNumbers = _.filter(wordsAroundNumbers, (wordsAroundNumber) => {
      const aroundWordCells = this.wordLetterCoordsMap.get(wordsAroundNumber);
      const startWordCell = _.head(aroundWordCells);
      const endWordCell = _.last(aroundWordCells);

      const newWordCanBeConnected = this.isCellNear(startNewWordCell, startWordCell) === true
        || this.isCellNear(endNewWordCell, startWordCell) === true
        || this.isCellNear(startNewWordCell, endWordCell) === true
        || this.isCellNear(endNewWordCell, endWordCell) === true;

      return newWordCanBeConnected;
    });

    return allowedWordsAroundNumbers;
  }

  /**
   * Adds the provided word cells to the word.
   *
   * @param  {number} wordNumber
   * @param  {Interfaces.Coord2D[]} newWordCells
   * @return {void}
   */
  private addWordCellsToWord (wordNumber: number, newWordCells: Interfaces.Coord2D[]): void {
    // Get start and end cells of the word
    const startNewWordCell = _.head(newWordCells);
    const endNewWordCell = _.last(newWordCells);

    // Replace the cells of new word shortes word
    for (const wordCell of newWordCells) {
      this.field[wordCell.y][wordCell.x] = wordNumber;
    }

    // Move new cells(chars) to the shortest word
    const shortestWordCells = this.wordLetterCoordsMap.get(wordNumber);
    const startShortestWordCell = _.head(shortestWordCells);
    const endShortestWordCell = _.last(shortestWordCells);
    let newShortestWordCells = shortestWordCells;
    if (this.isCellNear(startShortestWordCell, startNewWordCell) === true) {
      newShortestWordCells = _.concat(_.reverse(newWordCells), shortestWordCells);
    } else if (this.isCellNear(startShortestWordCell, endNewWordCell) === true) {
      newShortestWordCells = _.concat(newWordCells, shortestWordCells);
    } else if (this.isCellNear(endShortestWordCell, startNewWordCell) === true) {
      newShortestWordCells = _.concat(shortestWordCells, newWordCells);
    } else if (this.isCellNear(endShortestWordCell, endNewWordCell) === true) {
      newShortestWordCells = _.concat(shortestWordCells, _.reverse(newWordCells));
    }

    this.wordLetterCoordsMap.set(wordNumber, newShortestWordCells);
  }

  /**
   * Selects the next direction for word. Direction is selected randomly.
   *
   * @param  {number[][]} field
   * @param  {Interfaces.Coord2D} currentPosition
   * @return {Enums.Direction}
   */
  private getNextDirectionWithEmptyField (currentPosition: Interfaces.Coord2D): Enums.Direction {
    // Find a next free cell (w/o chart) by the random direction
    const nextPossibleDirections = _.shuffle([
      Enums.Direction.Right,
      Enums.Direction.Bottom,
      Enums.Direction.Left,
      Enums.Direction.Top,
    ]);
    const x = currentPosition.x, y = currentPosition.y;
    const nextDirection = _.find(nextPossibleDirections, (nextPossibleDirection) => {
      if (nextPossibleDirection === Enums.Direction.Right && this.field[y]?.[x + 1] === 0) {
        return true;
      } else if (nextPossibleDirection === Enums.Direction.Bottom && this.field[y + 1]?.[x] === 0) {
        return true;
      } else if (nextPossibleDirection === Enums.Direction.Left && this.field[y]?.[x - 1] === 0) {
        return true;
      } else if (nextPossibleDirection === Enums.Direction.Top && this.field[y - 1]?.[x] === 0) {
        return true;
      }
      return false;
    });

    return nextDirection;
  }

  /**
   * Generates the empty field w/ NxN size.
   *
   * @param  {number} fieldSize
   * @return {number[][]}
   */
  private genEmptyField (fieldSize: number): number[][] {
    // Fill the field empty cells (w/o word)
    const field: number[][] = [];
    for (let y = 0; y < fieldSize; y++) {
      if (_.isNil(field[y]) === true) {
        field[y] = _.fill(Array(fieldSize), 0);
      }
    }

    return field;
  }

  /**
   * Returns `true` if the cell 1 is near the cell 2
   *
   * @param  {Interfaces.Coord2D} cell1
   * @param  {Interfaces.Coord2D} cell2
   * @return {boolean}
   */
  private isCellNear (cell1: Interfaces.Coord2D, cell2: Interfaces.Coord2D): boolean {
    return Math.abs(cell1.x - cell2.x) <= 1 && Math.abs(cell1.y - cell2.y) <= 1;
  }

  /**
   * Returns `true` if the cell 1 is near the cell 2
   *
   * @param  {Interfaces.Coord2D} cell1
   * @param  {Interfaces.Coord2D} cell2
   * @return {boolean}
   */
  private findEmptyCell (field: number[][]): Interfaces.Coord2D {
    for (let y = 0; y < field.length; y++) {
      for (let x = 0; x < field[0].length; x++) {
        if (field[y][x] === 0) {
          return { x, y };
        }
      }
    }

    return null;
  }
}
