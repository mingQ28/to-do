import React from 'react'

const Modal = ({ children, onClose }) => {
    
  return (
    <>
        {/* modal-backdrop : Modal 배경 흐릿한(blur) 부분 */}
        <div onClick={onClose} data-cy="modal-backdrop" className='fixed top-0 left-0 w-full h-full backdrop-blur-md z-1'></div>

        {/* Modal dialog 부분 */}
        <div className='fixed z-10 w-1/2 p-8 m-0 transform -translate-x-1/2 -translate-y-1/2 border-none rounded shadow-xl top-1/2 left-1/2 bg-slate-500'>
            {children} 
            {/* 모달창을 여러 부분에서 재사용가능하게 하도록 
            여기서 input, text부분(입력 폼이나 안내 등)을 children 으로 받아서 여러 형태의 모달창을 만들수 있도록
            <Modal>children</Modal> 이렇게 사용할 수 있도록
            */}
        </div>
    </>
  )
}

export default Modal