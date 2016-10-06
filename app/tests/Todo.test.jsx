var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Todo = require('Todo');

describe ('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  //onToggleFunction called with proper id
  it('should call onToggle prop with id on click', () => {
    var todoData = {
      id: 199,
      text: 'Write test',
      completed: true
    };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData } onToggle={spy}/>);
    //el
    var $el = $(ReactDOM.findDOMNode(todo));
    //pass $el[0]
    TestUtils.Simulate.click($el[0]);
    //called successfully with 199?
    expect(spy).toHaveBeenCalledWith(199);
  });
});
