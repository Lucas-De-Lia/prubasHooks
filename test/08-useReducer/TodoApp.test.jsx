import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hooks/useTodo';

jest.mock('../../src/hooks/useTodo');

describe('Pruebas en <TodoApp/>', () => {
    useTodo.mockReturnValue({
        todos:[
            {id:1,descripcion:'todo1',done:false},
            {id:2,descripcion:'todo2',done:false}
        ],
        handleNewTodo:jest.fn(),
        handleDeleteTodo:jest.fn(),
        handleToggleTodo:jest.fn(),
        todosCount:2,
        pendingTodosCount:2,
    });
    test('debe de mostrar el componente correctamente', () => {
        render(<TodoApp/>);
        expect(screen.getByText('todo1')).toBeTruthy();
        expect(screen.getByText('todo2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    });
});