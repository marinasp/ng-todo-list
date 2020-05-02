import { Injectable } from '@angular/core'

const storageName = 'aah_todo_list'

const defaultList = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' }
]

@Injectable()
export class TodoListStorageService {
  private todoList;

  constructor () {
    this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList
  }

  get () {
    return [...this.todoList]
  }

  private update () {
    localStorage.setItem(storageName, JSON.stringify(this.todoList))
    return this.get()
  }

  post (item: any) {
    this.todoList.push(item)
    return this.update()
  }

  private findItemIndex (item) {
    return this.todoList.indexOf(item)
  }

  put (item: any, changes: any) {
    Object.assign(this.todoList[this.findItemIndex(item)], changes)
    return this.update()
  }

  destroy (item: any) {
    this.todoList.splice(this.findItemIndex(item), 1)
    return this.update()
  }
}
