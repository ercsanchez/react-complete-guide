import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id} // you can also use index: 2nd param automatically passed to map
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />

      {/* using ternary operator */}
      {/* {filteredExpenses.length === 0 ? (
        expensesContent
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id} // you can also use index: 2nd param automatically passed to map
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}

      {/* operator overloading */}
      {/* {filteredExpenses.length === 0 && expensesContent }
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id} // you can also use index: 2nd param automatically passed to map
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

      {/* best way */}
      {expensesContent}
    </Card>
  );
};

export default Expenses;
