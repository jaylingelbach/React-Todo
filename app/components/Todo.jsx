var React = require('react');
//grabs the props from the spread operator in TodoList and renders to the screen


var Todo = React.createClass ({
  render: function() {

    var {text, id} = this.props;
    return (
      <div>
        <p>{id}. {text}</p>
      </div>
    )
  }
});

module.exports = Todo;
