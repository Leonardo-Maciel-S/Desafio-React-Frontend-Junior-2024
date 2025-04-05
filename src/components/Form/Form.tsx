import { ChevronDown } from "lucide-react";

import "./form.scss";
import { FormEvent, useState } from "react";

const Form = () => {
  const [toDo, setToDo] = useState<string>("");
  const [checkAll, setCheckAll] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(toDo);

    setToDo("");
  };

  const checkAllToggle = () => {
    setCheckAll(!checkAll);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="toDoItem">
        <button type="button" onClick={checkAllToggle}>
          <ChevronDown
            size={40}
            color={!checkAll ? "#e6e6e6" : "black"}
            data-testid="arrow"
          />
        </button>
        <input
          name="toDoItem"
          type="text"
          placeholder="What needs to be done?"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
        />
      </label>
    </form>
  );
};

export default Form;
