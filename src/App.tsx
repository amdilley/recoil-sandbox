import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';

// import TodoList from './TodoList';
import Market from './Market';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        {/* <TodoList/> */}
        <Market/>
      </div>
    </RecoilRoot>
  );
}

export default App;
