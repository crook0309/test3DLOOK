
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

    private subscription: Subscription;
    public errorMessages = {
        'title': 'Title is required',
        'text': 'Text is required',
    };

    public TaskForm: FormGroup;
    taskList = [];
    constructor(

        private fb: FormBuilder,
        private todoService: TodoService
    ) { }

    ngOnInit(): void {
        this.TaskForm = this.fb.group(this.createFormGroup().controls)
    }
    createTask() {
        this.taskList = this.todoService.TodoListSubject.getValue();
        console.log(this.TaskForm.value);
        const data = this.TaskForm.value;
        data['id'] = new Date().getTime();
        this.taskList.push(this.TaskForm.value)
        this.todoService.TodoListSubject.next(this.taskList);
        this.TaskForm.reset();
    }


    get title() { return this.TaskForm.get('title') };
    get text() { return this.TaskForm.get('text') };

    createFormGroup() {
        return new FormGroup({
            text: new FormControl('', [Validators.required]),
            title: new FormControl('', [Validators.required]),
        })
    }






}
