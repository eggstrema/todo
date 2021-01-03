angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [];
	
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText});
      todoList.todoText = '';
	  todoList.save();
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
	  if (!serialized) { return; }
      list = JSON.parse(serialized);;
	  for (let i = 0; i < list.length; i++) {
        todoList.todos.push({text:list[i].text});
	  }
    };

	todoList.load();
	
	if (todoList.todos.length == 0) {
	  todoList.todos.push({text:'take out the trash'});
	  todoList.todos.push({text:'do the laundry'});
	  todoList.todos.push({text:'call my dentist'});
	  todoList.todos.push({text:'go for a run'});
	}
		 
  });
