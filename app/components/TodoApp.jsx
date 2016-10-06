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
          text: 'Walk the dog'
        }, {
          id: uuid(),
          text:'Clean the yard'
        },
        {
          id: uuid(),
          text: 'Study React'
        }, {
          id: uuid(),
          text:'Eat all of the foods'
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
          text: text
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
