import { useState } from "react";
import TodoBody from "./components/todos/TodoBody";
import TodoHeader from "./components/todos/TodoHeader";
import DefaultLayout from "./layouts/DefaultLayout";
import { TodoProvider } from "./contexts/TodoContext";
import NewModal from "./components/ui/NewModal";
import TodoForm from "./components/todos/TodoForm";

const dummyTodos = [
  {
    id: 1,
    title: "React 공부",
    summary: "React를 공부한다.",
    category: "TODO",
    startDate: "2025-08-11",
  },
  {
    id: 2,
    title: "점심 먹기",
    summary: "점심을 먹는다.",
    category: "PROGRESS",
    startDate: "2025-08-10",
  },
  {
    id: 3,
    title: "커피 마시기",
    summary: "커피를 마신다.",
    category: "DONE",
    startDate: "2025-08-12",
  },
];

function App() {
  // const [todos, setTodos] = useState(dummyTodos);
  // const [selectedCategory, setFilter] = useState('ALL');
  // console.log(todos);

  // // 1. 할일 등록 기능
  // const addTodoHandler = (todo) => {
  //   const newTodo = {
  //     id: self.crypto.randomUUID(),
  //     ...todo
  //   }
  //   const updatedTodos = [...todos, newTodo];

  //   setTodos(updatedTodos);

  //      // 이 경우 todos에는 제대로 푸쉬가 되지만 화면에 바로 출력되지 않음
  //   // => 리렌더링이 안돼서
  //   // => 왜?
  //   // setTodos라는 setter는 주소값이 바껴야 인식한다.
  //   // todos는 상수, 배열(참조형 객체)
  //   // newTodos = todos는 복사이기 때문에 주소값이 안바뀜
  //   // setTodos가 실행되지 않으므로 렌더링안됨
  //   // => 그래서 새로운 객체로 만들어야 됨

  //   // todo.push(todo)
  //   // const newTodos = todos
  //   // setTodos(newTodos)
  // }

  // /**
  //  * 2. 할일 수정 기능
  //  * @param {*} updateTodo 새롭게 갱신할 할일 객체
  //  */
  // const updateTodoHandler = (updateTodo) => {
  //   console.log(updateTodo);

  //   console.log('ttt');

  //   const updatedTodos = todos.map(todo => todo.id === updateTodo.id ? updateTodo : todo);
  //   setTodos(updatedTodos);
  // }

  // const deleteTodoHandler = (id) => {
  //   const updateTodos = todos.filter(todo => todo.id != id)
  //   setTodos(updateTodos)
  // }

  // // 필터링 후에 렌더링
  //   const filterTodos =
  //       () => selectedCategory === 'ALL' ?
  //                         todos : todos.filter(
  //                                   todo => todo.category === selectedCategory);

  // // 필터링 된 할일 목록 데이터
  // const filteredTodos = filterTodos();

  return (
    <DefaultLayout>
      {/* <header>
                <h1 className='pt-8 mx-auto text-red-200 max-w-max text-7xl'>
                  <img className='ml-4' src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thought%20Balloon.png" alt="Thought Balloon" width="75" height="75" />
                  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Seal.png" alt="Seal" width="75" height="75" />
                </h1>
          </header>
          <section className='max-w-xl m-4 mx-auto'>
            <TodoProvider>
              <TodoHeader />
              <TodoBody />
            </TodoProvider>
          </section> */}
      <NewModal>
        {/* 모달 창을 열고 닫기 위한 컴포넌트 작성 부분 */}
        <NewModal.Open>
          <button className="px-6 py-2 font-semibold text-gray-100 bg-green-500 border-none rounded cursor-pointer">
            New Add Todo
          </button>
        </NewModal.Open>
        {/* 모달 내부에 들어갈 컨텐츠용 컴포넌트 작성 부분 */}
        <NewModal.Dialog>
          {/* <TodoForm/> */}
          <div>input</div>
        </NewModal.Dialog>
      </NewModal>
    </DefaultLayout>
  );
}

export default App;
