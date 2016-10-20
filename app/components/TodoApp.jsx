var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass ({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  //updates todos array to add item
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          //id will use UUID to help with a unique id that is less buggy
          // installed node-uuid to help.
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  //set state
  handleSearch: function(showCompleted, searchText) {
    this.setState ({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleToggle: function (id) {
    //passes to Todo. However, with the todo list component, first
    // needs to be passed there, then into todoList.jsx down to the
    //individual item
    // alert(id); this checked to see if it was wired up properly
    //To toggle. Find item in todos array that matches the id and update completed status.
    var updatedTodos = this.state.todos.map((todo) => {
      //check to see if the id iterrating over matches the one passed in
      if(todo.id === id) {
        todo.completed = !todo.completed;
        // if is completed pass in timestamp, if not reset to undefined
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      //return item passed in if the id doesn't match
      return todo;
      });
      //update state in new array
      this.setState({todos: updatedTodos});
  },
  render: function () {
    //pass todos down
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    //render TodoList passing it the todo array
    //render AddTodo component here
    //pass it AddTodo method
    //should get called when form gets submitted.
    //
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
