import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { HiOutlineCheckCircle } from "react-icons/hi";

const TodoItem = (props) => {
    const { todo, removeTodo, completeTodo } = props
  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row" }>
      {todo.text}
      <div className="iconsContainer">
        <IoIosCloseCircleOutline
            style={ { marginRight: "5px" }}
            onClick={() => removeTodo(todo.id)}
        />
        <HiOutlineCheckCircle 
            onClick={() => completeTodo(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
