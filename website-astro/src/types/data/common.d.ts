export type Topic =
  | 'Sustainability'
  | 'Humanity-Centered Design'
  | 'Human Behavior'
  | 'Meaning'
  
export interface HasDescription {
  description: string
}

export interface HasUrl {
  url: string
}

export interface HasImage {
  image: Image
}

export interface Link extends HasUrl {
  label: string
}

export interface Image extends HasUrl {
  alt?: string
}


