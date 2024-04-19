import { getGame, getRatings } from "@/lib/games";
import styles from "./page.module.css";

export default async function Page({ params }: { params: { id: string }}) {
  const [ratings, game] = await Promise.all([
    getRatings(params.id),
    getGame(params.id)
  ]);

  return (
    <main className={styles.container}>
      <h1 className={styles.header}>Ratings for {game.name}</h1>
      <ul className={styles.ratings}>
        {ratings.map(r => <li key={r.user_id}>{r.rating}</li>)}
      </ul>
    </main>
  )
}
