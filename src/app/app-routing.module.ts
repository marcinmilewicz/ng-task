import {RouterModule, Routes} from "@angular/router";
import {TaskListComponent} from "./task-list/task-list.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: 'view/tasks', component: TaskListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
