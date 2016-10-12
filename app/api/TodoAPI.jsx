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

  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted -- filter is built in
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {

      // check if there is searchText if length 0 (empty string) return every search item
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // Sort todos with non-completed first.
    //built in method sort.
    filteredTodos.sort((a, b) => {
        //return -1 a before b. return 1 b before a. return 0 no change.
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
