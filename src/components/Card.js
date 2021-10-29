import "./Card.css";
export default function Card(props) {
  let classname = "card " + props.className;
  return <div className={classname}>{props.children}</div>;
}
