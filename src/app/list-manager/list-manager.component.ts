import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'todo-list-manager',
    templateUrl: './list-manager.component.html',
    styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

    title = 'todo works!';
    todoList = [
        {title: 'install NodeJS'},
        {title: 'install Angular CLI'},
        {title: 'create new app'},
        {title: 'serve app'},
        {title: 'develop app'},
        {title: 'deploy app'},
    ];

    addItem(title: string): void {
        this.todoList.push({title});
    }

    constructor() {
    }

    ngOnInit() {
    }

}
