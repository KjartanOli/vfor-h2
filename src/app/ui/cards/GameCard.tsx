import { Game } from "@/lib/types";
import Link from "next/link";

// TODO: Should the li element be part of the card or added by the
// surrounding page?
export default function GameCard({ game }: { game: Game }) {
  return (<Link href={`/games/${game.id}`}>
            <span>{game.name}</span>
            <span>{game.category}</span>
          </Link>)
}
