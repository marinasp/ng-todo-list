import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'todo-item',
    template: `
        <div class="todo-item">
          {{todoItem.title}}
          <button class="btn btn-red">Remove</button>
        </div>
      
    `,
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    @Input() todoItem: any;

    constructor() {
    }

    ngOnInit() {
    }

}
