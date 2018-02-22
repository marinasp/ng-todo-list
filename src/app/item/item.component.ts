import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'todo-item',
    template: `
        <div class="todo-item">
          {{todoItem.title}}
          <button class="btn btn-red" (click)="removeItem($event)">Remove</button>
        </div>
      
    `,
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    @Input() todoItem: any;

    @Output() remove: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    removeItem() {
        this.remove.emit(this.todoItem);
    }

}
