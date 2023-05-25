import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleComplete,
  toggleCompleteAsync,
  deleteTodoAsync,
} from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleCompleteAsync({ id, completed: !completed }));
  };

  const handDelete = () => {
    dispatch(deleteTodoAsync({ id }));
  };

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={handleCheckboxClick}
          ></input>
          {title}
        </span>
        <button className="btn btn-danger" onClick={handDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
