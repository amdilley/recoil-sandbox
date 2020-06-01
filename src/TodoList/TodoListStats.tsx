import React from 'react';
import { useRecoilValue } from 'recoil';

import { todoListStatsState } from '../selectors/todoList';

const TodoListStats = () => {
  const {
    total,
    totalCompleted,
    totalUncompleted,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  return (
    <ul>
      <li>Total items: {total}</li>
      <li>Items completed: {totalCompleted}</li>
      <li>Items not completed: {totalUncompleted}</li>
      <li>Percent completed: {percentCompleted}%</li>
    </ul>
  );
};

export default TodoListStats;
