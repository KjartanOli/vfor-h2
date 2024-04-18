import { rate, update_rating } from "@/app/actions";

export default function RatingForm({ game, rating }: { game: string, rating: number | null | undefined }) {
  return (
    <form action={rating ? update_rating : rate}>
      <input name="game" type="hidden" value={game}/>
      <label htmlFor="rating">Rating:
        <input
          name="rating"
          type="number"
          defaultValue={rating ? rating : null}
          min="0"
          max="5"
          required/>
      </label>
      <button>Rate</button>
    </form>
  );
}
