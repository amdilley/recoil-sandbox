import React from 'react';
import { useRecoilValue } from 'recoil';

import { filteredTodoListState } from '../selectors/todoList';

import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';
import TodoListToggle from './TodoListToggle';

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <TodoListStats/>
      <TodoListFilters/>
      <TodoListToggle/>
      <TodoItemCreator/>
      {todoList.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          item={todoItem}
        />
      ))}
    </div>
  )
};

export default TodoList;
