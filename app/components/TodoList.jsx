var React = require('react');
var Todo = require('Todo');
//passed array from TodoApp
//created a custom render to return custom jsx element for every element in that array
//Return a todo item with unique key property. id
// ... spread operation passes everything down as a prop.


var TodoList = React.createClass ({
  render: function() {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message"> Nothing to do</p>
        );
      }
      //iterate over the array return an array of jsx
      // for every todo return new jsx that is rendered to the screen
      return todos.map((todo) => {
        return (
          // the second arg passes down all attributes on an obj to a react component
          //without explicity defining everything. {...todo}
          // third arg is passed from todo app (handleToggle)
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
