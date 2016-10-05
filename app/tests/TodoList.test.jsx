var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
// passed into todosComponents as the second arg
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', ()=> {
    expect(TodoList).toExist();
    });

    it('should render one TodoComponent for each todo item', () => {
      //create dummy items to test
      var todos = [{
        id: 1,
        text: 'do something'
      }, {
        id: 2,
        text: 'Check mail'
    }];
    // pass dummy items into test component
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    //check how many items are rendered inside it first arg is the item to test.
    //second arg is the class of the item you want to look for. Required up top.
    // Returns an array. Check the array length.
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    expect(todosComponents.length).toBe(todos.length);
    });
  });
