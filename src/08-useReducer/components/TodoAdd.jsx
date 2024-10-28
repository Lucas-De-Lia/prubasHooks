import { useForm } from "../../hooks/useForm";



export const TodoAdd = ({handleNewTodo}) => {
    const {onInputChange,todo,onResetForm} = useForm({todo:''});
    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.trim().length<=1) return;
        const newTodo = {
            id: new Date().getTime(),
            descripcion: todo,
            done: false
        }
        handleNewTodo(newTodo);
        onResetForm();
    }
  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="¿Qué deseas hacer?"
            className="form-control"
            onChange={onInputChange}
            name="todo"
            value={todo}
        />
        <button
            type="submit"
            className="btn btn-outline-primary mt-1"
        >
            Agregar TODO
        </button>
    </form>
  )
}
