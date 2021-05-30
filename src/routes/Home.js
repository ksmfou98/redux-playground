import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, deleteToDo } from "../store";

const Home = ({ toDos, dispatchAddToDo, dispatchDeleteToDo }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatchAddToDo(text);
    setText("");
  };

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => dispatchDeleteToDo(todo.id)}>DEL</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  // redux state로 부터 state를 component의 props으로 전달해줌
  // store의 값을 여기 state로 가져올수 있음
  return { toDos: state }; // 이렇게하면 내컴포넌트 props안에 toDos: state로 생성됨
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchAddToDo: (text) => dispatch(addTodo(text)), // addTodo는 store에 생성한 action 생성함수임
    dispatchDeleteToDo: (id) => dispatch(deleteToDo(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); // connect가 store랑 내 component를 연결시켜줌

// 만약에 mapStateToProps는 필요 없고 mapDispatchToProps만 필요할떈 connect(null, mapDispatchToProps)이렇게 하면 됨
