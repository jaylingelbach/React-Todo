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
  });
