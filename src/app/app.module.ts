import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { TaskListComponent } from './task-list/task-list.component'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AddTaskComponent } from './add-task/add-task.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
    declarations: [AppComponent, TaskListComponent, AddTaskComponent],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
