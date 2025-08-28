import css from './Feedback.module.css';

export default function Feedback(props) {
  return (
    <div className={css.feedback}>
      {props.total > 0 ? (
        <ul>
          <li>Good: {props.feedbackCounts.good}</li>
          <li>Neutral: {props.feedbackCounts.neutral}</li>
          <li>Bad: {props.feedbackCounts.bad}</li>
          <li>Total: {props.total}</li>
          <li>Positive: %{props.positivePercentage}</li>
        </ul>
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
}
