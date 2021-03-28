import { Component } from '@angular/core';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent {

  task_title = "";
  task_description = "";
  task_priority = ""; 
  message = "";

  set_title = "Title";
  set_description = "Description";
  set_priority = "Priority"; 

  onAddTitle(event: Event): void {
    console.log(this.task_title);
    console.log(event.target);
    this.task_title = (event.target as HTMLInputElement).value;
    
  }

  onAddDescription(event: Event): void {
    console.log(this.task_description);
    console.log(event.target);
    this.task_description = (event.target as HTMLInputElement).value;
  }

  selectPriority(event: any){
    this.task_priority = (event.target).value;
  }
  
  onSetText(): void {
    this.checkStrings();
    // this.resetMessage();
    console.log(this.set_title);
  }

  isEmpty(value: string):boolean {
    if(value=='')
      return true;
    return false;
  }

  checkStrings(): void {
    if(this.isEmpty(this.task_title)){
      this.set_title = `Title not set`;
    }else{
      this.set_title = `'${this.task_title}'`;
    }

    if(this.isEmpty(this.task_description)){
      this.set_description = `Description not set`;
    }else{
      this.set_description = `${this.task_description}`;
    }
    
    if(this.isEmpty(this.task_priority) || this.task_priority=='None'){
      this.set_priority = `None`;
    }else{
      this.set_priority = `${this.task_priority}`;
    }

    this.checkMessage();
  }

  checkMessage():void {
    this.resetMessage();

    if(this.isEmpty(this.task_title)){
      this.message += `Title not set\n`;
    }

    if(this.isEmpty(this.task_description)){
      this.message += `Description not set\n`;
    }
    
    if(this.isEmpty(this.task_priority) || this.task_priority=='None'){
      this.message += `Priority not set\n`;
    }

    if(this.message==''){
      this.message = `Task saved!`;
    }
  }

  resetMessage():void {
    this.message = ``;
  }

  

}
