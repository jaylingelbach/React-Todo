var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  // Mocha method called before every test. Using to clean up localStorage so data is reset
  // and can test without error.
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos' , () => {
    // want local storage to get set and stringify version stored to that array
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      //call TodoAPI with array specified above
      TodoAPI.setTodos(todos);
      // get string back from localStorage and pass through JSON.parse to convert to array
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      // when working with obj and arrays use toEqual instead of toBe
      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = [{a: 'b'}];
      TodoAPI.setTodos = JSON.parse(localStorage.getItem('badTodos'));

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return an empty array for bad localStorage data', () => {
      // since beforeEach is called call getTodos and check value is an empty array
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid data in localStorage', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      //instead of calling setTodos. Cleaner and easier to test if set explicitly in localStorage
      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    })
  });

});
