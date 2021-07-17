import "./ExpenseForm.css";

import { useState } from "react";

const ExpenseForm = () => {
  //multiple states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // // using one state instead since all of the inputs pertain to a single form
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // document.getElementById('').addEventListener('click', (event) => {});
  // event is also passed to event handlers in react, same as in vanilla js
  const titleChangeHandler = (event) => {
    // multiple states
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);

    // single state
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // single state: CORRECT PATTERN FOR UPDATING SINGLE STATE
    // use correct pattern for updating key:value in a state
    // always uses updated state snapshot
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    // console.log(userInput["enteredTitle"]); // or userInput.enteredTitle

    console.log("Title changed!");
  };
  const amountChangeHandler = (event) => {
    // multiple states
    setEnteredAmount(event.target.value);
    console.log(enteredAmount);

    //single state
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // console.log(userInput.enteredAmount);
  };
  const dateChangeHandler = (event) => {
    // multiple states
    setEnteredDate(event.target.value);
    console.log(enteredDate);

    // single state
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // console.log(userInput.enteredDate);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
