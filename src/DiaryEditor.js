import React, { useRef,useState } from "react";           // 리엑트 Hooks 중 하나인 useState는 함수형 컴포넌트에서 상태 관리

const DiaryEditor = ({onCreate})=>{

    const authorInput = useRef();                   // Dom에 유즈레퍼런스 접근
    const contentInput = useRef();

    const [state, setState] = useState({    // useState 선언방식?
        author : "",
        content : "",
        emotion : 1,
    });

    const handleChangeDiary = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value, 
        });
    }

    const handleSubmit = () => {
        if(state.author.length < 1){
            authorInput.current.focus();        // authorInput 테그의 focus 기능을 사용
            return ;
        }

        if(state.content.length < 5){
            contentInput.current.focus();
            return ;
        }

        onCreate(state.author, state.content, state.emotion);
        alert("저장 성공");
        setState({
            author: "",
            content: "",
            emotion: 1,
        });     // 일기 쓴 후 초
    };

    return (
    <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input
            ref ={authorInput}
            name="author"
            value={state.author} 
            onChange={handleChangeDiary}
            />
        </div>
        <div>
            <textarea
            ref ={contentInput}
            name="content"
            value={state.content}
            onChange={handleChangeDiary}
            />
        </div>
        <div>
            <span>오늘의 감정점수 : </span>
            <select 
            name="emotion" 
            value={state.emotion}
            onChange={handleChangeDiary}
            >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
    </div>
    );
};
export default DiaryEditor; 