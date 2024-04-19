import RatingForm from "@/app/ui/forms/RatingForm";
import { get } from "@/lib/api";
import { getRatings } from "@/lib/games";
import { Game } from "@/lib/types";
import { is_logged_in } from "@/lib/utils";
import Image from 'next/image';

async function getGame(id: string): Promise<Game> {
  const result = await get(`games/${id}`);

  if (!result.ok)
    throw new Error('Failed to get games');

  return result.json();
}

export default async function Page({ params }: { params: { id: string }}) {
  const user_id = is_logged_in();
  const game = await getGame(params.id);

  return (
    <main>
      <h1>{game.name}</h1>
      { user_id ? <RatingForm game={params.id} rating={await (async user_id => {
        if (!user_id)
          return null;
        const ratings = await getRatings(params.id);
        return ratings.find(r => r.user_id === user_id)?.rating;
      })(user_id)} ></RatingForm> : null }
      <p>Category: {game.category}</p>
      <p>Studio: {game.studio}</p>
      <p>Released: {game.year}</p>
      {game.image ? <Image src={game.image} alt=""></Image> : null }
      <p>{game.description}</p>
    </main>
  )
}
