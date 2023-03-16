
import DiaryItem from "./DiaryItem.js";

const DiaryList = ({onEdit, onRemove, diaryList})=> {       //prob
    console.log(diaryList);
    return (
    <div className="DiaryLsit">
        <h2>일기 리스트</h2>
        <h4>{diaryList.length}개의 일기가 있습니다.</h4>
        <div>
            {diaryList.map((it)=>(                          // <div key={it.id}> 3개가 있는 거랑 똑같음 | 아래 아래자식 컴포넌트들이 (id와 같은 고유한 값이 있을때) key Prop을 받아야해서 키값을 넣어줌음
            <DiaryItem key={it.id} {...it} onEdit = {onEdit} onRemove={onRemove}/>
            ))}
        </div>
    </div>
    );
};

DiaryList.defaultProps={                //App.js에 Diarylist값에 dummyList대신 undefined값일 때 defaultProps를 이용해서 빈배열을 넣어서 만들기 가능
    diaryList: [],
}
export default DiaryList;