// 파일 이름 === 컴포넌트 이름이 동일(Single File Component)

// 메인페이지에서 사용될 전체 기본 레이아웃이 되는 컴포넌트
// children : 원래는 <name/>으로 작성해야 되는데 children을 사용하면 <></>처럼 사용해
// <a>text</a> 이런 식으로 값을 '자식 요소'로 넣어줄 수 있음
const DefaultLayout = ( {children} ) => {

    return (
        <div className='w-full h-full overflow-y-scroll bg-slate-400'>
            <div className='max-w-xl mx-auto min-w-[20rem]'>
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout;