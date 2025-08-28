import css from './Options.module.css';

export default function Options(props) {
  return (
    <div className={css.options}>
      <button onClick={() => props.onUpdateFeedback("good")}>Good</button>
      <button onClick={() => props.onUpdateFeedback("neutral")}>Neutral</button>
      <button onClick={() => props.onUpdateFeedback("bad")}>Bad</button>
      {props.total > 0 && <button onClick={props.onReset}>Reset</button>}
    </div>
  );
}
