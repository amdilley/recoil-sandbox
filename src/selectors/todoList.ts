import { selector } from 'recoil';

import todoListState, { todoListFilterState } from '../atoms/todoList';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter(({ isComplete }) => isComplete);
      case 'Show Uncompleted':
        return list.filter(({ isComplete }) => !isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const total = todoList.length;
    const totalCompleted = todoList.filter(({ isComplete }) => isComplete).length;
    const totalUncompleted = total - totalCompleted;
    const percentCompleted = total > 0
      ? Math.floor(100 * totalCompleted / total)
      : 0;

    return {
      total,
      totalCompleted,
      totalUncompleted,
      percentCompleted,
    };
  },
});
