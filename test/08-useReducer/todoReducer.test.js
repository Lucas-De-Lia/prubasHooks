import {todoReducer} from '../../src/08-useReducer/todoReducer';
describe('Pruebas en todoReducer', () => {
    const initialState = [{
        id:1,
        description: 'Demo todo',
        done: false
    }];
    test('debe de retornar el estado inicial', () => {

        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState); //como se pasa por referencia tiene que ser el mismo objeto -> === es valido 
    });

    test('debe de agregar un todo', () => {
        const action = {
            type: '[TODO] Add todo',
            payload:{   
                id:2,
                description: 'todo num 2',
                done: false
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState).toHaveLength(2);
        expect(newState).toContain(action.payload);
    });
    test('debe de eliminar un todo', () => {
        //le mando el initial y al mandar la acion el estado debe ser 0
        const accion = {
            type: '[TODO] Delete todo',
            payload: 1
        };
        const newState = todoReducer(initialState, accion);
        expect(newState).toHaveLength(0);
    });
    test('debe de hacer el toggle del todo', () => {
        //cambia el done de falsa a true con la accion
        const accion = {
            type : '[TODO] Toggle todo',
            payload: 1
        }
        const newState = todoReducer(initialState,accion);
        expect(newState[0].done).toBeTruthy();
    });
});
