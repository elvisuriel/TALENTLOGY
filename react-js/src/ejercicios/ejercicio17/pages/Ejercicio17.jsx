import { useState } from 'react';

import { TodoAdd } from '../components/TodoAdd';
import { TodoList } from '../components/TodoList';
import { useTodo } from '../hooks/useTodo';

function Ejercicio17() {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  return (
    <>
      <div className='card card-body'>
        <h1 className='card-title'>Lista de tareas</h1>
        <div className='card-text'>
          <div className='d-flex justify-content-between'>
            <h3>
              N° Tareas: <span>{todosCount}</span>
            </h3>
            <h3>
              Pendientes: <span>{pendingTodosCount}</span>
            </h3>
          </div>
        </div>

        <div className='card-text'>
          <h3>Agregar Tarea</h3>
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>

        <TodoList
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      </div>
    </>
  );
}

export default Ejercicio17;
