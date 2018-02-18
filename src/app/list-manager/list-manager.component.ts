import {Component, OnInit} from '@angular/core';
import {TodolistService} from '../todolist.service';

@Component({
    selector: 'todo-list-manager',
    templateUrl: './list-manager.component.html',
    styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

    title = 'Todolist';
    private todoList: any;

    addItem(title: string): void {
        this.todoListService.addItem({title});
    }

    constructor(private todoListService: TodolistService) {
    }

    ngOnInit() {
        this.todoList = this.todoListService.getTodoList();
    }



}
