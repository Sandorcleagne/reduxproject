import React, { useState } from "react";
import "./Todo.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index.js";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>Add Your List Here ✌️</figcaption>
        </figure>
        <div className="addItems">
          <input
            type="text"
            placeholder="✏️ Write Your todo here"
            value={inputData}
            onChange={(e) => {
              setInputData(e.target.value);
            }}
          />
          <i
            className="fa fa-plus add-btn"
            onClick={() => dispatch(addTodo(inputData), setInputData(""))}
          ></i>
        </div>
        <div className="showItems">
          {list.map((elm, index) => {
            return (
              <div className="eachItem" key={index}>
                <h3>{elm.data}</h3>
                <div className="todo-btn">
                  <i
                    className="far fa-trash-alt"
                    title="Delete Item"
                    onClick={() => dispatch(deleteTodo(elm.id))}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
