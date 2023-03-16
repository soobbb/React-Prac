import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList.js';
import React, { useEffect, useState, useRef } from 'react';


// const dummylist = [
//   {
//     id: 1,
//     author: "전수빈",
//     content: "hi 1",
//     emotion:2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "soob",
//     content: "hi 12",
//     emotion:3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "dda",
//     content: "hi 11",
//     emotion:4,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 4,
//     author: "bin",
//     content: "hi 15",
//     emotion:5,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0)

  const getData = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments"
    ).then((res)=>res.json());
    
    const initData = res.slice(0,20).map((it)=>{
      return {
        author : it.email,
        content : it.body,
        emotion : Math.floor(Math.random() * 5) +1,
        create_date : new Date().getTime(),
        id : dataId.current++
      }
    })

    setData(initData);
  }

  const onCreate = (author, content,emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data])
  };

  const onRemove = (targetId)=>{
    console.log(`${targetId}가 삭제되었읍니다.`)
    const newDiaryList = data.filter((it)=>it.id !== targetId);     //useState의 data로 갔다가  return delete값으로 다시감
    setData(newDiaryList);
  };

  // 수정하는 데이터
  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it)=> 
      it.id === targetId ? {...it, content : newContent} : it // 수정 대상이면 컨텐츠 교체 아니라면 원래 데이터 다시 리턴
      )
    );
  };

  return (
    <div className='App'>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onEdit = {onEdit} tonRemove={onRemove} diaryList={data}/>
    </div>
  );
}

export default App;
