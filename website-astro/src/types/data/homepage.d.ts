import type { CardId } from "./card"
import type { HasDescription, HasImage, HasUrl, Topic } from "./common"

export type HomepageResourcesYaml = {
  resources: HomepageResources
}

export type HomepageTopicsYaml = {
  topics: HomepageTopics
}

export interface HomepageTopicData extends HasDescription, HasUrl, HasImage {}

export type HomepageTopics = {
  [topic in Topic]: HomepageTopicData
}

export type HomepageResources = {
  cards: CardId[]
}