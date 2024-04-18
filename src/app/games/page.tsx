import { get } from "@/lib/api";
import { Game } from "@/lib/types";
import GameCard from "../ui/cards/GameCard";
import { redirect } from "next/navigation";
import Link from "next/link";

async function getGames(page: number = 1): Promise<Array<Game>> {
  const result = await get(`games?page=${page}`);

  if (!result.ok)
    throw new Error('Failed to get games');

  return result.json();
}

export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  if (searchParams && searchParams.page && typeof searchParams.page !== 'string')
    redirect('.');
  const page = ((page: string | string[] | undefined): number => {
    if (!page || typeof page !== 'string')
      return 1;
    return parseInt(page, 10);
  })(searchParams?.page);
  const games = await getGames(page);
  if (games.length === 0 && page > 1)
    redirect(`?page=${page - 1}`);

  return (<main>
            <h1>Games</h1>
            <ul>
              {games.map(game => <li key={game.id}><GameCard game={game}></GameCard></li>)}
            </ul>
            <div>
              {page > 1 ? <Link href={`?page=${page - 1}`}>Previous</Link> : null}
              {((await getGames(page + 1)).length > 0 ? <Link href={`?page=${page + 1}`}>Next</Link> : null)}
            </div>
          </main>)
}
