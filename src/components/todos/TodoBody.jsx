import TodoItem from './TodoItem'
const TodoBody = ({ todos, onUpdate, onDelete }) => {
  const sortedTodos = [...todos].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  return (
    <ul>
      {sortedTodos.map(todoItem =>
        <TodoItem
          onUpdate={onUpdate}
          onDelete={onDelete}
          todo={todoItem}
          key={todoItem.id} />)}
    </ul>
  )
}
export default TodoBody