import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms'; 
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
    
    const username = new FormControl(this.name.value);
    console.log(username.value);

    this.inputtedName.emit(username);
    return false;
  }

}
