import React, { useRef, useEffect } from 'react';
import {
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import todoListState from '../atoms/todoList';
import { todoListStatsState } from '../selectors/todoList';


const TodoListToggle = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const {
    total,
    totalCompleted,
  } = useRecoilValue(todoListStatsState);
  const allCompleted = total === totalCompleted;
  const allUncompleted = totalCompleted === 0;
  const indeterminate = totalCompleted < total && totalCompleted > 0;
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleListCompletion = () => {
    if (allUncompleted) {
      setTodoList([...todoList].map((todoItem) => ({
        ...todoItem,
        isComplete: true,
      })));
    } else {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }

      setTodoList([...todoList].map((todoItem) => ({
        ...todoItem,
        isComplete: false,
      })));
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [
    indeterminate,
    inputRef,
  ]);

  return (
    <>
      <input
        type="checkbox"
        checked={allCompleted}
        onChange={toggleListCompletion}
        ref={inputRef}
      />
    </>
  );
};

export default TodoListToggle;
