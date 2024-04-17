import { getGame, getRatings } from "@/lib/games";

export default async function Page({ params }: { params: { id: string }}) {
  const [ratings, game] = await Promise.all([getRatings(params.id), getGame(params.id)]);
  return (
    <main>
      <h1>Ratings for {game.name}</h1>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {ratings.map(r => <tr>
                              <td>{r.user_id}</td>
                              <td>{r.rating}</td>
                            </tr>)}
        </tbody>
      </table>
    </main>
  )
}
