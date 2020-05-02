import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'todo-item',
  template: `
      <div class="todo-item">
        <input type="checkbox" (click)="completeItem()"/>
        <p class="todo-title" [ngClass]="{'todo-complete': isComplete}">{{todoItem.title}}</p>
        <button class="btn btn-red" (click)="removeItem()" [disabled]="!isComplete">Remove</button>
      </div>

    `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;

  @Output() remove: EventEmitter<any> = new EventEmitter();

  isComplete: boolean = false;

  ngOnInit () {
  }

  removeItem () {
    this.remove.emit(this.todoItem)
  }

  completeItem () {
    this.isComplete = !this.isComplete
  }
}
