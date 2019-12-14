export default class CallCommand {
  public command: string;
  constructor(str: string){
    this.command = str;
  }

  exec(): void {
    system.callSystem(`cmd.exe /c \"${this.command} /t\"`); 
  }

}
