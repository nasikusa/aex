export default class CallCommand {
  public commandStr: string;
  constructor(str: string){
    this.commandStr = str;
  }

  exec(): void {
    system.callSystem(`cmd.exe /c \"${this.commandStr} /t\"`); 
  }

}
