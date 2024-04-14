import { get } from "@/lib/api";
import { Game } from "@/lib/types";
import GameCard from "../ui/cards/GameCard";

async function getGames(): Promise<Array<Game>> {
  const result = await get('games');

  if (!result.ok)
    throw new Error('Failed to get games');

  return result.json();
}

export default async function Page() {
  const games = await getGames();

  return (<main>
            <h1>Games</h1>
            <ul>
              {games.map(game => <li key={game.id}><GameCard game={game}></GameCard></li>)}
            </ul>
          </main>)
}
