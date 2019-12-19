import {Template} from '../../data/Template';

export default class {
  protected template: any;
  constructor() {
    this.template = Template;
  }

  load(){
    alert(this.template.basic.path);
    var my_file = new File(this.template.basic.path);
    if (my_file.exists){
      const new_project = app.open(my_file);
      return new_project;
    }
  }
}
