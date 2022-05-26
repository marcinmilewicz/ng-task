import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { TasksService } from '../services/tasks.service'
import { Task } from '../models/task'

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
    task$: Observable<Task> | undefined

    constructor(
        private route: ActivatedRoute,
        private taskService: TasksService
    ) {}

    ngOnInit(): void {
        const taskId = this.route.snapshot.paramMap.get('taskId')
        // @ts-ignore
        this.task$ = this.taskService.getById(taskId)
    }
}
