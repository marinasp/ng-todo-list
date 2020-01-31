import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {InputComponent} from './input/input.component';
import {ItemComponent} from './item/item.component';
import {ListManagerComponent} from './list-manager/list-manager.component';
import {TodolistService} from './todolist.service';
import {TodoListStorageService} from './todo-list-storage.service';

@NgModule({
    declarations: [
        AppComponent,
        InputComponent,
        ItemComponent,
        ListManagerComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [TodolistService, TodoListStorageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
