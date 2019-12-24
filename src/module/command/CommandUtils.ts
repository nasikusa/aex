import _ from '../../base/_';
import CallCommand from './CallCommand';

interface getDirOptionObject {
  isSearchSub?: boolean;
  isNameOnly?: boolean;
  sortOption?: '/O:d' | '/O:e' | '/O:g' | '/O:n' | '/O:s' | '/O-d' | '/O-e' | '/O-g' | '/O-n' | '/O-s' | '';
  isReverseArray?: boolean;
  isReturnAsArray?: boolean;
}

export default class CommandUtils {
  public Command: CallCommand = new CallCommand();

  constructor() {}

  /**
   *
   *
   * @param {string} targetPath
   * @param {('F' | 'D' | 'FD')} type
   * @param {getDirOptionObject} [optionObject={
   *       isSearchSub: false,
   *       isNameOnly: false,
   *       sortOption: '',
   *       isReverseArray: false,
   *       isReturnAsArray: true,
   *     }]
   * @returns {(string | string[])}
   * @memberof CommandUtils
   * @read https://proengineer.internous.co.jp/content/columnfeature/5043
   */
  getDir(
    targetPath: string,
    type: 'F' | 'D' | 'FD' ,
    optionObject: getDirOptionObject = {
      isSearchSub: false,
      isNameOnly: false,
      sortOption: '',
      isReverseArray: false,
      isReturnAsArray: true,
    }
  ): string | string[] {
    let command = `dir "${targetPath}" /b`;
    switch(type){
      case 'F':
        command += ' /A-d ';
        break;
      case 'D':
        command += ' /A:d ';
        break;
      case 'FD':
        command += '';
        break;
    }
    if (optionObject.isSearchSub) command += '/S ';
    if (optionObject.isNameOnly) command += '/D ';
    if (optionObject.sortOption != null) command += optionObject.sortOption;
    this.Command.setCommand(command);
    const result = this.Command.exec(true);
    if (typeof result !== 'boolean') {
      if (optionObject.isReturnAsArray) {
        const resultArray = _.getArrayDividedByLine(result);
        if (optionObject.isReverseArray) {
          return resultArray.reverse();
        } else {
          return resultArray;
        }
      } else {
        return result;
      }
    }
    return '';
  }
}
