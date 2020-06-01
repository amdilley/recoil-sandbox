import React from 'react';
import { useRecoilState } from 'recoil';
import { set as _set } from 'lodash';
import { eq as _eq } from 'lodash/fp';

import todoListState, { TodoListItem } from '../atoms/todoList';

const TodoItem: React.FC<{ item: TodoListItem; }> = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex(_eq(item));

  const editItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextList = _set([...todoList], [index], {
      ...item,
      text: e.target.value,
    });

    setTodoList(nextList);
  };

  const toggleItemCompletion = () => {
    const nextList = _set([...todoList], index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(nextList);
  };

  const deleteItem = () => {
    const nextList = [...todoList]

    nextList.splice(index, 1);
    
    setTodoList(nextList);
  };

  return (
    <div>
      <input
        type="text"
        value={item.text}
        onChange={editItemText}
      />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button
        onClick={deleteItem}
      >
        X
      </button>
    </div>
  )
};

export default TodoItem;
