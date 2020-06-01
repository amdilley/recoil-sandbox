import { atom } from 'recoil';

export interface TodoListItem {
  id: string,
  isComplete: boolean;
  text: string;
}

const todoListState = atom<Array<TodoListItem>>({
  key: 'todoListState',
  default: [],
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

export default todoListState;
