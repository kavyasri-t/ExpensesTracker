import { useState } from "react";
import Card from "./Card";
import "./ExpenseForm.css";
export default function ExpenseForm(props) {
  // const [updatedTitle, setTitle] = useState(""); //useState takes initial value we want to store as arg
  // const [updatedAmount, setAmount] = useState("");
  // const [updatedDate, setDate] = useState("");
  /* another method without using multiple states */

  const [updatedInput, setInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const [id, setId] = useState(1);
  function titleHandler(event) {
    //setTitle(event.target.value);
    //setInput({ ...updatedInput, title: event.target.value });
    /* here we are using previous state variable which might not get updated immediately
      so we should avoid using variables here instead we need to pass function in set
      func which takes parameter called previous state */

    setInput((previousState) => {
      return { ...previousState, title: event.target.value };
    });
  }
  function amountHandler(event) {
    //setAmount(event.target.value);
    // setInput({ ...updatedInput, amount: event.target.value });
    setInput((previousState) => {
      return { ...previousState, amount: +event.target.value };
    });
  }
  function dateHandler(event) {
    //setDate(event.target.value);
    // setInput({ ...updatedInput, date: event.target.value });

    setInput((previousState) => {
      // return { ...previousState, date: new Date(String(event.target.value)) };

      return { ...previousState, date: event.target.value };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    setId((prev) => {
      let newv = prev + 1;
      console.log("in state");
      return newv;
    });
    console.log("before send");
    props.getNewExpense({ id, ...updatedInput }, false); //false-click on add exp btn should hide the form
    console.log("after send send");
    setInput({ title: "", amount: "", date: "" });
  }
  // function cancelbtnHandler() {
  //   props.cancelForm(false);
  // }

  console.log("in form");
  return (
    <Card className="form-container">
      <form onSubmit={submitHandler}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={updatedInput.title}
            onChange={titleHandler}
          ></input>
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={updatedInput.amount}
            onChange={amountHandler}
          ></input>
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-1-1"
            value={updatedInput.date}
            onChange={dateHandler}
          ></input>
        </div>

        <button className="btn" type="submit">
          Add Expense
        </button>
        <button className="btn" type="button" onClick={props.cancelForm}>
          cancel
        </button>
      </form>
    </Card>
  );
}
