var React = require('react');
//grabs the props from the spread operator in TodoList and renders to the screen


var Todo = React.createClass ({
  render: function() {

    var {text, id, completed} = this.props;
    return (
      // when checkbox clicked toggles via the id.
      // onToggle has been passed from TodoApp, to TodoList, then here.
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        {text}
      </div>
    )
  }
});

module.exports = Todo;
