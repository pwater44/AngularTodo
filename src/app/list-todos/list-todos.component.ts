import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor (
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date)
  {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [ ]
  message : string

  constructor(private service:TodoDataService, private router: Router) { }

  ngOnInit() {
    this.refreshTodos()
  }

  refreshTodos() {
    this.service.retrieveAllTodos('nvrit').subscribe (
      response => {
        console.log(response);
        this.todos = response
      }
    )
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`)
    this.service.deleteTodo('nvrit', id).subscribe (
      response => { 
        console.log(response);
        this.message = `Delete ${id} Successful`;
        this.refreshTodos();
      }
    )
  }

  addTodo() {
    console.log("add todo pressed")
    this.router.navigate(['todos', -1])
  }

  updateTodo(id) {
    console.log(`update todo ${id}`)
    this.router.navigate(['todos', id])
  }

}
