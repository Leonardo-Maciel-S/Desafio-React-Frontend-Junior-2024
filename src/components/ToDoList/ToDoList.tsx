import { useEffect, useState } from "react";
import { api } from "../../http/axios";

import TodoItem, { ITodo } from "../TodoItem/TodoItem";

import "./TodoList.scss";

const ToDoList = () => {
  const [ListTodo, setListTodo] = useState<ITodo[]>([]);

  useEffect(() => {
    try {
      api.get("/").then((res) => setListTodo(res.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="todoList-container">
      <ul>
        {ListTodo.length > 0 &&
          ListTodo.map((todo) => <TodoItem key={todo.id} todo={todo} />)}{" "}
      </ul>

      {ListTodo.length > 0 && <div className="footerList" />}
    </div>
  );
};

export default ToDoList;
