This folder contains data used in the website. It provides a separation of "content" (i.e. text) with "syntax" (i.e. the actual HTML tags and structure).

## Cards

Cards are defined in `./cards`, and conform to the following specification:

```yaml
tags: [list, of, tags, such as the topic, sustainability]
title: Card Title (required)
description: Card description (required)
url: Card link (required)
image:
    url: Card image url (required)
    alt: Card image alt text (optional, but highly recommended)
```

Below is a list of valid tags:

- sustainability
- humanity-centered design
- human behavior
- meaning


The format of cards is defined in TypeScript as:

```ts
type Tag =
    | 'sustainability'
    | 'humanity-centered design'
    | 'human behavior'
    | 'meaning'

interface Card {
    tags: Tag[]
    title: string
    description: string
    url: string
    image: {
        url: string
        alt?: string
    }
}
```
