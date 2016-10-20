var React = require('react');
var moment = require('moment');


var Todo = React.createClass ({
  render: function() {

    var {text, id, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo'
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
      <div className= {todoClassName} onClick={() => {
          this.props.onToggle(id);
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>

          <div className="todo-subtext">
            <p>{text}</p>
            <p>{renderDate()}</p>
          </div>
      </div>
    )
  }
});

module.exports = Todo;
