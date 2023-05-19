import React from 'react';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) return;

    let newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
          placeholder="¿Qué hay que hacer?"
          aria-label="Agregar tarea"
        />
        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </div>
    </form>
  );
};
