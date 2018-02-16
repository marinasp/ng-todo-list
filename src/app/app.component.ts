import {Component} from '@angular/core';

@Component({
    selector: 'todo-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
