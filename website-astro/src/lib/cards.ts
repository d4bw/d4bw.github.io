import type { Card } from "@/types/data/card"

// const cardModules = import.meta.env.PROD
//   ? import.meta.globEager('../data/cards/*.(yaml|yml)')
//   : import.meta.globEager('../../../data/cards/*.(yaml|yml)')
const cardModules = import.meta.globEager('~/data/cards/*.(yaml|yml)')

/* validate cards */

const _validationMap = new Map()

// group cards by id
for (const path in cardModules) {
  const card = cardModules[path]

  if (!_validationMap.has(card.id)) { _validationMap.set(card.id, []) }
  _validationMap.get(card.id).push({ path, card })
}

// identify invalid cards
for (const [id, cardList] of _validationMap.entries()) {
  // flag cards with non-string ids
  if (typeof id !== 'string') {
    throw new Error(`card(s) found with non-string id ${id} in the following path(s):
${cardList.map(({ path }) => `\t${path}`).join('\n')}
Change the card ids to be strings.
`)
  }

  // flag cards with duplicate ids
  if (cardList.length > 1) {
    throw new Error(`multiple cards found with id ${id} in the following paths:
${cardList.map(({ path }) => `\t${path}`).join('\n')}
Change all but one cards' ids to be unique.`)
  }
}

/* exports */

export const cards = Array.from(_validationMap, ([id, [{ card }]]) => card)

const idToCard = new Map<string, Card>(Array.from(_validationMap, ([id, [{ card }]]) => [id, card]))
export function getCardWithId (id: string) {
  if (!idToCard.has(id)) {
    throw new Error(`no card exists with id ${id}`)
  }

  return idToCard.get(id)
}