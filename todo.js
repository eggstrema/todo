angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'take out the trash'},
      {text:'do the laundry'},
      {text:'call my dentist'},
      {text:'go for a run'}];
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText});
      todoList.todoText = '';
    };
	
    todoList.save = function() {
	  clone = [];
	  for (let i = 0; i < todoList.todos.length; i++) {
		clone.push({ text: todoList.todos[i].text});
	  }
      serialized = JSON.stringify(clone);
      localStorage.setItem("todos", serialized);

    };
	
    todoList.load = function() {
	  serialized = localStorage.getItem("todos");
	  
      list = JSON.parse(serialized);;
	  for (let i = 0; i < list.length; i++) {
        todoList.todos.push({text:list[i].text});
	  }
    };
	 
  });
