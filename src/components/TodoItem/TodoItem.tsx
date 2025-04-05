import { Circle } from "lucide-react";

import "./TodoItem.scss";

export interface ITodo {
  id: string;
  title: string;
  isDone: boolean;
}

const TodoItem = ({ todo }: { todo: ITodo }) => {
  return (
    <>
      <li key={todo.id}>
        <button type="button">
          <Circle size={30} color="#e6e6e6" />
        </button>
        <span>{todo.title}</span>
      </li>
    </>
  );
};

export default TodoItem;
