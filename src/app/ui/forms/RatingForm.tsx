import { rate, update_rating } from "@/app/actions";
import styles from "./RatingForm.module.css";

export default function RatingForm({ game, rating }: { game: string, rating: number | null | undefined }) {
  return (
    <form action={rating ? update_rating : rate} className={styles.formContainer}>
      <input name="game" type="hidden" value={game} className={styles.inputRating}/>
      <label htmlFor="rating" className={styles.ratingLabel}>Rating:
        <input
          name="rating"
          type="number"
          defaultValue={rating ? rating.toString() : ""}
          min="0"
          max="5"
          required
          className={styles.rating}/>
      </label>
      <button className={styles.button}>Rate</button>
    </form>
  );
}
