import Card from "./Card";
import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
  let valuesList = props.dataPoints.map((obj) => obj.value);
  let maxVal = 0;
  maxVal = Math.max(...valuesList);
  return (
    <Card className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            label={dataPoint.label}
            max={maxVal}
          ></ChartBar>
        );
      })}
    </Card>
  );
}
export default Chart;
