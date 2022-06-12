export type CardId = string

export interface Card {
  id: CardId
  tags: string[]
  title: string
  description: string
  url: string
  image: {
    url: string
    alt?: string
  }
}