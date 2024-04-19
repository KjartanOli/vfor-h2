import { getGame, getRatings } from "@/lib/games";

export default async function Page({ params }: { params: { id: string }}) {
  const [ratings, game] = await Promise.all([
    getRatings(params.id),
    getGame(params.id)
  ]);

  return (
    <main>
      <h1>Ratings for {game.name}</h1>
      <ul>
        {ratings.map(r => <li key={r.user_id}>{r.rating}</li>)}
      </ul>
    </main>
  )
}
