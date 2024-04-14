import { get } from "@/lib/api";
import { Game } from "@/lib/types";

async function getGame(id: string): Promise<Game> {
  const result = await get(`games/${id}`);

  if (!result.ok)
    throw new Error('Failed to get games');

  return result.json();
}

export default async function Page({ params }: { params: { id: string }}) {
  const game = await getGame(params.id);

  return (
    <main>
      <h1>{game.name}</h1>
      <p>Category: {game.category}</p>
      <p>Studio: {game.studio}</p>
      <p>Released: {game.year}</p>
      <p>{game.description}</p>
    </main>
  )
}
