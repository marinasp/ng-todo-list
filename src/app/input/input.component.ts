import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  title: string;

  constructor() {
   }

  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }

  generateTitle(): string {
    return 'This title was generated by a method.';
  }

}
