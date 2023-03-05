import "./Card.css";

/**
 * Container composent for content to be displayed as a card.
 * @param {*} props
 * @returns
 */
const Card = (props) => {
  // Ensure that clients can specify additional style classes that
  // we combine with the default card class.
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
