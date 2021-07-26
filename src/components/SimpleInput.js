import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // prevents default: send HTTP request to server for current page | current page reload and possible app restart | lose state

    if (enteredName.trim() === "") {
      return;
    }
    // state
    console.log(enteredName);

    // ref
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef.current.value = ""; // ref: not ideal since directly manipulating Real DOM instead of letting React handle that | allowed in special cases if you really just want to reset input
    setEnteredName(""); // state: best practice for resetting input value since react handles DOM manipulation
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
