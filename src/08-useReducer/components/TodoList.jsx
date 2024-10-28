import {TodoItem} from './TodoItem';

export const TodoList = ({todoList,onDeleteTodo,onToggleTodo}) => {
  return (
        <ul className="list-group">
            {
                todoList.map((todo) => (
                <TodoItem 
                  todo = {todo} key={todo.id} 
                  onDeleteTodo = {onDeleteTodo}
                  onToggleTodo = {onToggleTodo}
                />))
            }
        </ul>
  )
}
