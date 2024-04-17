export interface Game {
  id: number,
  name: string,
  category: string,
  description: string,
  studio: string,
  year: number,
  image: string
}

export interface Rating {
  user_id: number,
  game_id: number,
  rating: number
}
