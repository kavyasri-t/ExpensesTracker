import "./ExpenseFilter.css";
const ExpenseFilter = (props) => {
  function dropdownHandler(event) {
    props.onFilterYear(event.target.value);
  }
  return (
    <div className="expense-filter">
      <div className="filter-dropdown">
        <p>Filter by year</p>
        <select value={props.selected} onChange={dropdownHandler}>
          {/*instead of using seperate handler to call function defined in expense we can directly
           call that */}

          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
