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
      stored = localStorage.getItem("todos");
      if (stored) { 		   
        todoList.deserialize(stored);
      } else {
        todoList.createSomeSamples();
      }
    };

    todoList.deserialize = function(serialized) {
      list = JSON.parse(serialized);
      for (let i = 0; i < list.length; i++) {
        todoList.todos.push({text:list[i].text});
      }    
    };

    todoList.createSomeSamples = function() {
      todoList.todos.push({text:'take out the trash'});
      todoList.todos.push({text:'do the laundry'});
      todoList.todos.push({text:'call my dentist'});
      todoList.todos.push({text:'go for a run'});
    };

    todoList.load();
			 
  });
