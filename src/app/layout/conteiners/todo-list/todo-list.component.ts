import { TodoService } from './../../../shared/services/todo.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {



    public todoList = [];
    public subscriptionTodoList: Subscription;
    constructor(
        private todoService: TodoService
    ) { }

    ngOnInit(): void {
        this.subscriptionTodoList = this.todoService.TodoListSubject.subscribe(todoList => {
            console.log(todoList);

            this.todoList = todoList;
        })
    }

    isTasks() {
        return this.todoList.length > 0 ? true : false;
    }


}
