import _ from '../base/_';
import BaseInfo from '../base/BaseInfo';

export default class CallCommand {
  public command: string[] = [];
  protected result: string = "";
  private info: BaseInfo = new BaseInfo();

  constructor(str: string | string[]){
    this.setCommand(str);
    this.setResult();
  }

  getResult( isUpdate: boolean = true ): string{
    if( isUpdate ){
      this.setResult();
    }
    return this.result;
  }

  setResult(): void{
    this.result = "";
    for( let i = 0 ; i < this.command.length; i++ ){
      if( i === this.command.length - 1 ){
        this.result += `${this.command[i]}`
      } else {
        this.result += `${this.command[i]} & `;
      }
    }
  }

  setCommand(str: string | string[]){
    this.command = [];
    if( _.getType(str) === "string" ){
      // @ts-ignore
      this.command[0] = str;
    } else {
      // @ts-ignore
      this.command = str;
    }
  }

  exec(): string{
    let callResult:string = "";
    if( this.info.isWindows() ){
      callResult = system.callSystem(`cmd.exe /c \"${this.result} /t\"`); 
    }
    return callResult;
  }

}
