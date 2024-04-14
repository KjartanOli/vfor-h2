import { get } from "@/lib/api";
import { Game, Rating } from "@/lib/types";

export async function getGame(id: string): Promise<Game> {
  const result = await get(`games/${id}`);

  if (!result.ok)
    throw new Error('Failed to get games');

  return result.json();
}

export async function getRatings(id: string): Promise<Array<Rating>> {
  const result = await get(`games/${id}/ratings`);

  if (!result.ok)
    throw new Error('Failed to get games');

  return result.json();
}
