import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { uniqueId as _uniqId } from 'lodash';

import todoListState from '../atoms/todoList';

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    if (inputValue) {
      setTodoList((prevList) => ([
        ...prevList,
        {
          id: _uniqId(),
          text: inputValue,
          isComplete: false,
        },
      ]));
      setInputValue('');
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button
        disabled={!inputValue}
        onClick={addItem}
      >
        Add
      </button>
    </div>
  );
};

export default TodoItemCreator;
