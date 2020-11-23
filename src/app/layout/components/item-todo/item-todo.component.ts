import { TodoService } from './../../../shared/services/todo.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-item-todo',
    templateUrl: './item-todo.component.html',
    styleUrls: ['./item-todo.component.scss']
})
export class ItemTodoComponent implements OnInit {
    @Input() item = <any>{};
    @Input() itemIndex: number;


    constructor(
        private todoService: TodoService
    ) { }

    ngOnInit(): void {
    }

    public deleteTask(item) {
        this.todoService.deleteTask(item);
    }

}
