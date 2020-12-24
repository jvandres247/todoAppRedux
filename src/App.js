import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {agregarTarea, eliminarTarea} from './actions/todo';

const App = () => {
  const tareas = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const guardar = (evt) => {
    evt.preventDefault();
    dispatch(agregarTarea(evt.target.tarea.value));
  };

  const remove = (id) =>{
    dispatch(eliminarTarea(id));
  }
  return (
    <div className="App">
      <header className="App-header">
        <form
          onSubmit={(evt) => {
            guardar(evt);
          }}
        >
          <input type="text" name="tarea" />
          <button>Guardar</button>
        </form>
        <div>
          <ul>
            {tareas.map((tarea) => {
              return <li key={tarea.id}> {tarea.valor} <button onClick={()=>{remove(tarea.id)}}>Borrar</button></li>;
            })}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default App;
