var React = require('react');
var moment = require('moment');

//grabs the props from the spread operator in TodoList and renders to the screen


var Todo = React.createClass ({
  render: function() {

    var {text, id, completed, createdAt, completedAt} = this.props;
    //new render function inside render function to pass to momentformat (user readable date)
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if(completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }
      // formatting guide at moment.js/docs
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      // when checkbox clicked toggles via the id.
      // onToggle has been passed from TodoApp, to TodoList, then here.
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
});

module.exports = Todo;
