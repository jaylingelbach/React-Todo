var React = require('react');

//text box and button

var AddTodo = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var todoText = this.refs.todoText.value;
    console.log(todoText);

    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },

    render: function () {
      return (
        <div>
          <form ref="form" onSubmit={this.onFormSubmit}>
            <input type="search" ref="todoText" placeholder="What do you need to do?"></input>
              <button className="button expanded hollow">Add Todo</button>
          </form>
        </div>
      )
    }
});

module.exports = AddTodo;
