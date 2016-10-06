var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', ()=> {
    expect(TodoApp).toExist();
    });

    it('should add todo to the todos state onHandleAddTodo', () => {
      var todoText = 'Play Fallout 4';
      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

      //update todos state to be nothing
      todoApp.setState({todos: []});
      //add todo
      todoApp.handleAddTodo(todoText);

      expect(todoApp.state.todos[0].text).toBe(todoText);
    });

    // test handleToggle making sure it toggles the completed status
    it('should toggle completed value when handleToggle is called', () => {
      // create todo
      var todoData = {
        id: 11,
        text: 'test features',
        completed: false
      }
      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
      //set state to the todoApp
      todoApp.setState({todos: [todoData]});
      //check first item false
      expect(todoApp.state.todos[0].completed).toBe(false);
      //call handleToggle with 11
      todoApp.handleToggle(11);
      // check completed value changed
      expect(todoApp.state.todos[0].completed).toBe(true);
    });
  });
