// BEGIN: 7f3c3d6b5d4a
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

describe('App', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders a TodoList component', () => {
        expect(wrapper.find(TodoList)).toHaveLength(1);
    });

    it('renders an AddTodo component', () => {
        expect(wrapper.find(AddTodo)).toHaveLength(1);
    });

    it('deletes completed todos when the "Delete Completed" button is clicked', () => {
        const todo = { id: 1, title: 'Test Todo', completed: true };
        wrapper.setState({ todos: [todo] });
        wrapper.find('button').simulate('click');
        expect(wrapper.state('todos')).toHaveLength(0);
    });

    it('toggles the completed status of a todo when it is clicked', () => {
        const todo = { id: 1, title: 'Test Todo', completed: false };
        wrapper.setState({ todos: [todo] });
        wrapper.find(TodoList).prop('toggleComplete')(1);
        expect(wrapper.state('todos')[0].completed).toBe(true);
    });

    it('adds a new todo when the AddTodo component is submitted', () => {
        const todo = { id: 1, title: 'Test Todo', completed: false };
        wrapper.find(AddTodo).prop('addTodo')(todo);
        expect(wrapper.state('todos')).toHaveLength(1);
    });
});
// END: 7f3c3d6b5d4a