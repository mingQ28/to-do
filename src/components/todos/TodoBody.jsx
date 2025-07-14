import React from 'react'
import TodoItem from './TodoItem';


// 하나의 할일을 가진 todoitem이라는 이름의 컴포넌트를 작성해서 todobody 내부에서 렌더링

const TodoBody = ({todos}) => {
  // let {todos} = dummyTodos 과 동일
  return (
    <ul>
        {
          // props로 내려받은 todos배열로 map 연산
          todos.map(todo => <TodoItem todo={todo} key={todo.id} />)
        }
    </ul>
  )
}

export default TodoBody