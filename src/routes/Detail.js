import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

const Detail = ({ toDo }) => {
  // const id = useParams(); // match.params.id 처럼 주소의 id값을 가져와줌
  console.log(toDo);
  return <h1>{toDo?.text}</h1>;
};

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  console.log(id);
  console.log(state);
  return { toDo: state.find((todo) => todo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
