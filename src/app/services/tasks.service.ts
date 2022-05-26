import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, shareReplay, tap } from 'rxjs'
import { Task } from '../models/task'

@Injectable({
    providedIn: 'root',
})
export class TasksService {
    constructor(private httpClient: HttpClient) {}

    getAllTasks(): Observable<Task[]> {
        return this.httpClient.get<Task[]>(`/tasks`).pipe(shareReplay())
    }

    addNewTask(task: Task) {
        return this.httpClient.post(`/tasks`, task).pipe(tap(console.log))
    }

    getById(taskId: number | string): Observable<Task> {
        return this.httpClient.get<Task>(`/tasks/${taskId}`).pipe(shareReplay())
    }
}
