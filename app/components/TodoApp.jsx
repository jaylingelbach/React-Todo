var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass ({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        }, {
          id: uuid(),
          text:'Clean the yard',
          completed: true
        },
        {
          id: uuid(),
          text: 'Study React',
          completed: true
        }, {
          id: uuid(),
          text:'Eat all of the foods',
          completed: false
        }
      ]
    };
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
          completed: false
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
      }
      //return item passed in if the id doesn't match
      return todo;
      });
      //update state in new array
      this.setState({todos: updatedTodos});
  },
  render: function () {
    //pass todos down
    var {todos} = this.state;
    //render TodoList passing it the todo array
    //render AddTodo component here
    //pass it AddTodo method
    //should get called when form gets submitted.
    //
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
