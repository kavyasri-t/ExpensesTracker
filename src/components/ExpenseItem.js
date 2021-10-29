import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {
  let month = props.date.toLocaleString("en-IN", { month: "long" });
  let year = props.date.toLocaleString("en-IN", { year: "numeric" });
  let day = props.date.toLocaleString("en-IN", { day: "2-digit" });

  //let [title, setTitle] = useState(props.title);

  // function clickHandler() {
  //   //setTitle("updated"); //function to set the value in state
  //   // setTitle("updated1");

  // }
  return (
    <Card className="expense-item">
      <div className="date">
        <div>{month}</div>
        <div>{year}</div>
        <div className="day">{day}</div>
      </div>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>update title</button> */}
    </Card>
  );
}
export default ExpenseItem;
