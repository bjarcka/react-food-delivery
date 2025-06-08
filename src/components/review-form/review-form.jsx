import { useForm } from "./use-form";
import { Counter } from "../counter/counter";
import styles from "./review-form.module.css";

export const ReviewForm = () => {
  const {
    form,
    onNameChange,
    onTextChange,
    onRatingDecrement,
    onRatingIncrement,
    clear,
  } = useForm();

  const { name, text, rating } = form;

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className={styles.item}>
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={(event) => onNameChange(event.target.value)}
        />
      </div>
      <div className={styles.item}>
        <span>Text</span>
        <input
          type="text"
          value={text}
          onChange={(event) => {
            onTextChange(event.target.value);
          }}
        />
      </div>
      <div className={styles.item}>
        <span>Raiting</span>
        <Counter
          increment={onRatingIncrement}
          decrement={onRatingDecrement}
          value={rating}
        />
      </div>
      <button onClick={clear}>clear</button>
    </form>
  );
};
