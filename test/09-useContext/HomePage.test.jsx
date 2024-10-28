import { fireEvent, render, screen } from '@testing-library/react';
import {HomePage} from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';
describe('Pruebas en <HomePage/>', () => {
    const user = {
        id:1,
        name:'lucas'
    }

    const setUserMock = jest.fn();

    test('debe de mostrar el componente sin el usuario', () => {
        render(
        <UserContext.Provider value={{user:null}}>
            <HomePage/>
        </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });
    test('debe mostrar el componente con el usuario', () => {
        render(
            <UserContext.Provider value={{user}}>
                <HomePage/>
            </UserContext.Provider>
            );
            const preTag = screen.getByLabelText('pre');
            expect(preTag.innerHTML).toBe(JSON.stringify(user,null,3));
    });
    test('debe de llamar el setUser cuando se hace click ', () => {
        render(
            <UserContext.Provider value={{user,setUser:setUserMock}}>
                <HomePage/>
            </UserContext.Provider>
            );
        const setUserBoton = screen.getByRole('button');
        fireEvent.click(setUserBoton);
        expect(setUserMock).toHaveBeenCalledWith({
            id:123,
            name:'Lucas De Lia',
            email:'papota@gmail.com'
          });
    });
});