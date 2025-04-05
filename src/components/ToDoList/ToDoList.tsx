import { useEffect, useState } from "react";
import { api } from "../../http/axios";

import TodoItem, { ITodo } from "../TodoItem/TodoItem";

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
    <ul className="todoList-container">
      {ListTodo.length > 0 && ListTodo.map((todo) => <TodoItem todo={todo} />)}
    </ul>
  );
};

export default ToDoList;
