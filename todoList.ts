import { TodoItem } from "./models";

const input = require('prompt-sync')({sigint: true});

export class TodoList {
  private idCounter: number;
  private todoList: TodoItem[];
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