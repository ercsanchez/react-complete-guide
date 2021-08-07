import { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    // ? if current can be undefined or string  ! if we are sure that current can only be string
    // ide autocompletes current?.value since it doesn't know that its impossible for enteredText to be undefined
    // ref connection (rendering of <input> with ref prop) is established first before this statement can be executed

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">
        <input type="text" id="text" ref={todoTextInputRef} />
        <button>Add Todo</button>
      </label>
    </form>
  );
};

export default NewTodo;
