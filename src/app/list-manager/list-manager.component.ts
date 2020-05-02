import { Component, OnInit } from '@angular/core'
import { TodolistService } from '../todolist.service'

@Component({
  selector: 'todo-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'Todolist';
  todoList: any;

  constructor (private todoListService: TodolistService) {
  }

  ngOnInit () {
    this.todoList = this.todoListService.getTodoList()
  }

  addItem (title: string): void {
    this.todoList = this.todoListService.addItem({ title })
  }

  removeItem (item) {
    this.todoList = this.todoListService.removeItem(item)
  }
}
