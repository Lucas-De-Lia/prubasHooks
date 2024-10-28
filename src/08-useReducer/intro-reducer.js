const estadoInicial = [{
    id:1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = ( estado = estadoInicial, accion = {} ) =>{
    //acion cambia el estado
    if( accion.type === '[TODO] add todo' ){
        return [...estado, accion.payload];
    }



    //siempre se regresa un nuevo estado
    return estado;
}

let todos = todoReducer();

const nuevoTodo = {
    id:2,
    todo: 'Comprar leche',
    done: false
}
const agregarTodoAction = {
    type: '[TODO] add todo',
    payload: nuevoTodo
    //payload es la carga que va dentro de la accion
}

todos = todoReducer( todos, agregarTodoAction);

console.log(todos);
