import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, shareReplay} from "rxjs";
import {Task} from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpClient: HttpClient) {
  }

  getAllTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`/tasks`).pipe(
      shareReplay()
    )
  }
}
