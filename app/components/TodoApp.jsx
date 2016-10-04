var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass ({
  getInitialState: function() {
    return {
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
  render: function () {
    //pass todos down
    var {todos} = this.state;
    //render TodoList passing it the todo array
    return (
      <div>

        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
