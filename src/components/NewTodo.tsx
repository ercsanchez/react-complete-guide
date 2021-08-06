import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
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

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">
        <input type="text" id="text" ref={todoTextInputRef} />
        <button>Add Todo</button>
      </label>
    </form>
  );
};

export default NewTodo;
