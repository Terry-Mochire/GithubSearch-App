import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() inputtedName = new EventEmitter();
  name: any = new FormControl()
  constructor() { }

  ngOnInit(): void {
    
  }

  searchRepos(){
   

    console.log(this.name.value);

    this.inputtedName.emit(this.name.value);
    return false;
  }

}
