import {RouterModule, Routes} from "@angular/router";
import {TaskListComponent} from "./task-list/task-list.component";
import {NgModule} from "@angular/core";
import {AddTaskComponent} from "./add-task/add-task.component";

const routes: Routes = [
  {
    path: 'view/tasks', component: TaskListComponent
  }, {
  path: "view/addtask", component: AddTaskComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
