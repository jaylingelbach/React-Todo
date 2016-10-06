var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoApp = React.createClass ({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text:'Clean the yard'
        },
        {
          id: 3,
          text: 'Study React'
        }, {
          id: 4,
          text:'Eat all of the foods'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('New todo: ' + text);
  },
  //set state
  handleSearch: function(showCompleted, searchText) {
    this.setState ({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
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
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
