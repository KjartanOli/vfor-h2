import { get } from "@/lib/api";
import { Game } from "@/lib/types";
import Image from 'next/image';
import styles from "./page.module.css";

async function getGame(id: string): Promise<Game> {
  const result = await get(`games/${id}`);

  if (!result.ok)
    throw new Error('Failed to get games');

  return result.json();
}

export default async function Page({ params }: { params: { id: string }}) {
  const game = await getGame(params.id);

  return (
    <main className={styles.container}>
      <h1 className={styles.header}>{game.name}</h1>
      <div className={styles.gamesContainer}>
        <p className={styles.category}>Category: {game.category}</p>
        <p className={styles.studio}>Studio: {game.studio}</p>
        <p className={styles.release}>Released: {game.year}</p>
        <div className={styles.imageContainer}>
          {game.image ? <Image src={game.image} alt={""} className={styles.image}></Image> : null }
        </div>
        <p className={styles.description}>{game.description}</p>
      </div>
    </main>
  )
}
