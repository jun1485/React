import "./App.css";
import { useRef, useState } from "react";

function App() {
  // Destructuring 문법 (왼쪽name은 실제 state, 오른쪽은 state변경 함수)
  const [postName, setPostName] = useState([
    "리액트 맛집",
    "JS 맛집",
    "다음엔 뭘 배워볼까?",
  ]);
  const [likeCount, setLikeCount] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [titleNumber, setTitle] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const inputInfo = useRef();
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ fontSize: "20px" }}>블로그예요!</h4>
      </div>
      <div>
        <button
          onClick={() => {
            let copy = [...postName];
            copy.sort();
            setPostName(copy);
          }}
        >
          가나다순 정렬
        </button>
      </div>

      {postName.map((name, i) => {
        return (
          <div className="blogList">
            <h4
              className="blogTitle"
              onClick={() => {
                setModal(true);
                if (modal === true) setModal(false);
                setTitle(i);
              }}
            >
              {postName[i]}
            </h4>
            <span
              className="like"
              onClick={() => {
                let copy = [...likeCount];
                copy[i] += 1;
                setLikeCount(copy);
              }}
            >
              👍{likeCount[i]}
            </span>
            <br/>
            <p class="blogTextBody">블로그 내용</p>
            <button className="deletePost" onClick={() => {
              let copy = [...postName];
              copy.splice(i, 1);
              setPostName(copy);
            }}>글 삭제</button>
          </div>
        );
      })}
      {modal === true ? (
        <Modal
          titleNumber={titleNumber}
          setPostName={setPostName}
          color={"skyblue"}
          postName={postName}
        />
      ) : null}
      <input className="textInput" ref={inputInfo}
        type={"text"}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          if(inputValue === '') { 
            alert('빈칸을 확인해주세요!');
            return 0;
          }
          //setPostName([inputValue, ...postName]);
          let copy = [...postName];
          copy.unshift(inputValue);
          setPostName(copy);
          likeCount.unshift(0);
          inputInfo.current.value = '';
          inputInfo.current.focus();
        }}
      >
        글 추가
      </button>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.postName[props.titleNumber]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button
        onClick={() => {
          props.setPostName(["Node.js 맛집", "JS 맛집", "다음엔 뭘 배워볼까?"]);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
