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
 
  });
