var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', ()=> {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    var searchText = 'Dog';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, 'Dog');
  });

  it('should call onSearch with proper checked value', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)
    // update checked value on showCompleted value to true
    todoSearch.refs.showCompleted.checked = true;
    //Simulate change on ref
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    // first arg true and second should be empty string
    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
