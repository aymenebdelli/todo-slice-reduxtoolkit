import React from 'react';
import './App.css';
import ListTask from './components/ListTask/ListTask';
import Task from './components/Task/Task';
import {useSelector} from "react-redux"
import {selectTodoList} from "./Redux/Reducers/todoSlice"
import {Provider} from 'react-redux'
import configureStore from "./Redux/Store/index"

function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <Provider store={configureStore}>
    <div className="App">
      {/* todo list */}
      <div className="app_container">
        <div className='app_todoContainer'>
          {
            todoList.map(item => {
              <ListTask
                name={item.item}
                done={item.done}
                id={item.id} 
                />
            })
          }
        </div>
      </div>
      {/* done  */}
      {/* input */}
      <Task />
    </div>
    </Provider>
  );
}

export default App;
