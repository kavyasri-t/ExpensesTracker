import "./ChartBar.css";
export default function ChartBar(props) {
  let fillBar = 0;
  if (props.max > 0) {
    fillBar = Math.ceil((props.value / props.max) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fillBar }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
