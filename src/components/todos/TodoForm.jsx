import { TODO_CATEGORY_ICON } from '@/constants/icon'
import { useState } from 'react';
const TodoForm = ({onClose, onAdd}) => {
    // 각각의 입력폼을 개별 상태로 관리
    // 폼 바인딩
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [category, setCategory] = useState('TODO')

    // 할일 등록 버튼을 눌렀을때 동작시킬 핸들러
    const addTodoHandler = () => {
        // 프로터티와 변수의 이름이 같을 경우 title: title이 아닌 title로만 작성 가능
        const todo = {title, summary, category} 
        // App.jsx에서 전달받은 함수(addTodoHandler)를 호출
        onAdd(todo); 
        // 모달창 닫기
        onClose();
    }

    return (
        <>
            <h3 className="text-3xl text-red-200">할일 등록</h3>
            <form className='my-2'>
                <div>
                    <label className='block mb-2 text-xl text-white' htmlFor='title'>Title</label>
                    <input onChange={e => setTitle(e.target.value)}
                        className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded' 
                        type='text' id='title' />
                </div>
                <div>
                    <label className='block mb-2 text-xl text-white' htmlFor='summary'>Summary</label>
                    <textarea onChange={e => setSummary(e.target.value)}
                        className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded' 
                        id='summary' rows='5' />
                </div>
                <div>
                    <label className='block mb-2 text-xl text-white' htmlFor='category'>Category</label>
                    <select onChange={e => setCategory(e.target.value)}
                        className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded' 
                        id='category' >
                        <option value='TODO'>{TODO_CATEGORY_ICON.TODO} To do</option>
                        <option value='PROGRESS'>{TODO_CATEGORY_ICON.PROGRESS} On progress</option>
                        <option value='DONE'>{TODO_CATEGORY_ICON.DONE} Done</option>
                    </select>
                </div>

                <div className='flex justify-end gap-4'>
                    <button onClick={onClose} className='text-xl text-white cursor-pointer' type='button'>Cancel</button>
                    <button onClick={addTodoHandler} className='px-6 py-3 text-xl text-red-200 cursor-pointer' type='button'>Add</button>
                </div>
            </form>
        </>
    )
};
export default TodoForm