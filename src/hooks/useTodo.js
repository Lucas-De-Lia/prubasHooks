import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    //el dispatch me sirve para mandarle nuevos valores al reducer
    const [todos, dispatch] = useReducer(todoReducer, [],init);
    //el reducer no lo ejecuto solo paso la referencia a la funcion, para que sea ejecutado por el useReducer

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos]);
    
    const handleNewTodo = (newTodo) => {
        const action = {
            type: '[TODO] Add todo',
            payload: newTodo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Delete todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type:'[TODO] Toggle todo',
            payload: id
        })
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
    }
}
