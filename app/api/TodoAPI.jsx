var $ = require('jQuery');

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)) {
      // 1st arg is name second is array. JSON.stringify takes array converts to string
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    //fetch from localStorage and make sure it is array. if so return values
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    //convert string back into array
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }
    // check if array. if obj don't want to pass it.
    return $.isArray(todos) ? todos: [];
    // if ($.isArray(todos)) {
    //   return todos
    // } else {
    //   return [];
    // } same as ternary above. For reference. 
  }
};
