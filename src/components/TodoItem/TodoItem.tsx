import { Circle, X } from "lucide-react";

import "./TodoItem.scss";
import { useEffect, useRef, useState } from "react";

export interface ITodo {
  id: string;
  title: string;
  isDone: boolean;
}

interface ITodoItem {
  todo: ITodo;
}

const TodoItem = ({ todo }: ITodoItem) => {
  const [text, setText] = useState<string>(todo.title);

  const input = useRef<HTMLInputElement | null>(null);
  const cover = useRef<HTMLDivElement | null>(null);

  const doubleClick = (e: MouseEvent) => {
    input.current?.removeAttribute("disabled");
    input.current?.focus();

    if (cover.current) cover.current.style.display = "none";
  };

  useEffect(() => {
    const div = cover.current;

    if (!div) return;

    div.addEventListener("dblclick", doubleClick);

    return () => {
      div.removeEventListener("dblclick", doubleClick);
    };
  }, []);

  return (
    <>
      <li>
        <button type="button">
          <Circle size={30} color="#e6e6e6" />
        </button>
        <form className="input-container">
          <input
            type="text"
            ref={input}
            value={text}
            disabled
            onChange={(e) => setText(e.target.value)}
          />
          <div className="cover" ref={cover} />
        </form>

        <button type="button" className="btnClose">
          <X size={25} />
        </button>
      </li>
    </>
  );
};

export default TodoItem;
