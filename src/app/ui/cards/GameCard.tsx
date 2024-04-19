import { Game } from "@/lib/types";
import Link from "next/link";
import styles from "./GameCard.module.css";

// TODO: Should the li element be part of the card or added by the
// surrounding page?
export default function GameCard({ game }: { game: Game }) {
  return (<Link href={`/games/${game.id}`} className={styles.link}>
            <span className={styles.name}>{game.name}</span>
            <span className={styles.category}>{game.category}</span>
          </Link>)
}
