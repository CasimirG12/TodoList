import { TodoItem } from "./models";

const input = require('prompt-sync')({sigint: true});

export class TodoList {
  idCounter
  todoList
  constructor () {
    this.idCounter = 0;
    this.todoList = [];
  }


  public addItem = () => {

  }

  public deleteItem = () => {

  }

  public viewList = () => {  
  }
}