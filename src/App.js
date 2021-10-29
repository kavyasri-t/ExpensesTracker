import "./App.css";
import React, { useState } from "react";
import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import Card from "./components/Card";
function App() {
  const expensesInitial = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 450,
      date: new Date(2021, 10, 12),
    },
  ];
  const [expenses, addNewExpense] = useState(expensesInitial);
  const [isExpand, setExpandForm] = useState(false);

  function newExpenseHandler(expense, isExpand) {
    //expenses.push(expense);

    addNewExpense((prev) => [expense, ...prev]);
    setExpandForm(isExpand);
  }
  function expandFormHandler() {
    setExpandForm(true);
  }
  function cancelHandler() {
    setExpandForm(false);
  }
  /* this is what happens in the background when when we return jsx code
       createelemnts thakes element tag, attributes if any,child nodes or content of that
       tag if there are multiple children we need to mention comma seperated values*/
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "hello"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );
  console.log("in app");

  return (
    <div className="main">
      {!isExpand && (
        <Card className="form-container expand">
          <button className="btn btn-add" onClick={expandFormHandler}>
            Add New Expense
          </button>
        </Card>
      )}

      {isExpand && (
        <ExpenseForm
          getNewExpense={newExpenseHandler}
          cancelForm={cancelHandler}
        ></ExpenseForm>
      )}
      <Expenses expensesList={expenses} />
    </div>
  );
}

export default App;
