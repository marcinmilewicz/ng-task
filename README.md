# NgTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Run `npm run start:server` for a mock json server. Navigate to `http://localhost:3000/` for resources

## Requirements

- Fork repository and solve task there
- Application should consist of two screens: Task List and Task Details
- User should have possibility to perform the following actions:
  - [ ] See all task in Task List view
  - [ ] Add new task for available assignee
  - [ ] See details of task (only basic information as name, assignee and status)
  - [ ] Each task should have name, assignee and information about its status (it's done or not yet)
  - [ ] Each task can be marked as 'done' as well as it could be reverted to 'undone'

## Tips

- Data is served by json-server. It allows also for basic CRUD operations. You will not need anything more sophisticated.
- The appearance of the application from the UI side is not important, however, the semantics in HTML building should be kept. If you want, use the component library you know.
- We know that in such a small application, state management is not required, but you can use it if you have experience to show what patterns of state management you know.
- Remember about front-end validation when creating data
- Data from json-server comes with a small delay simulating real scenarios. How will you handle it to be friendly in terms of UX?
- Although it is a small task, remember about modularity when creating solutions to show your understanding when creating larger enterprise-class applications.
