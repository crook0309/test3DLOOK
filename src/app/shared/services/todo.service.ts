import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


import { ITodo } from '../models/models';

@Injectable()
export class TodoService {
    public TodoListSubject = new BehaviorSubject<any>([]);
    public todoList: Observable<ITodo[]>;
    constructor() {
        this.todoList = this.TodoListSubject.asObservable();
    }
    deleteTask(item) {
        if (this.TodoListSubject.getValue().length === 0) return;
        console.log(this.TodoListSubject.getValue());
        let data = this.TodoListSubject.getValue();
        let arr = data.filter(x => x.id !== item.id)
        console.log(arr);

        this.TodoListSubject.next(arr);

    }
}
