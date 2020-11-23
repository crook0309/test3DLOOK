import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './layout/conteiners/todo-list/todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTodoComponent } from './layout/components/add-todo/add-todo.component';
import { CommonModule } from '@angular/common';
import { TodoService } from './shared/services/todo.service';
import { ItemTodoComponent } from './layout/components/item-todo/item-todo.component';

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        AddTodoComponent,
        ItemTodoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule

    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
