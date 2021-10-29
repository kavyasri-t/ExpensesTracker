import ExpenseItems from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import Chart from "./Chart";
import { useState } from "react";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterYearHandler = (filterDate) => {
    setFilteredYear(filterDate);
  };
  //let uniqueId = 1;
  let dataList = [
    { value: 0, label: "Jan" },
    { value: 0, label: "Feb" },
    { value: 0, label: "Mar" },
    { value: 0, label: "Apr" },
    { value: 0, label: "May" },
    { value: 0, label: "jun" },
    { value: 0, label: "jul" },
    { value: 0, label: "Aug" },
    { value: 0, label: "Sep" },
    { value: 0, label: "Oct" },
    { value: 0, label: "Nov" },
    { value: 0, label: "Dec" },
  ];
  let filterlist = props.expensesList.filter(function (expense) {
    return String(expense.date).includes(filteredYear);
  });
  let explist = filterlist.map((expense) => (
    <ExpenseItems
      key={expense.id}
      date={new Date(expense.date)}
      title={expense.title[0].toUpperCase() + expense.title.slice(1)}
      amount={expense.amount}
    ></ExpenseItems>
  ));

  if (filterlist.length > 0) {
    filterlist.forEach((item) => {
      return (dataList[new Date(item.date).getMonth()].value += item.amount);
    });
  }

  return (
    <Card className="expenses">
      {/* we can use two way binding here by passing initial date in state as selected
         option  */}
      <ExpenseFilter
        selected={filteredYear}
        onFilterYear={filterYearHandler}
      ></ExpenseFilter>

      <Chart dataPoints={dataList}></Chart>

      {explist.length === 0 ? (
        <p className="message">No Expenses spent ;)</p>
      ) : (
        explist
      )}
      {/*if res array length is 0 then display the message */}
    </Card>
  );
}
