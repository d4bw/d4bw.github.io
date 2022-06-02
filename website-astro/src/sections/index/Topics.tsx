import { For } from "solid-js"
import homepage from "@d4bw/styles/src/pages/home.module.scss"
import colors from "@d4bw/styles/src/color.module.scss"
import sustainabilityIcon from "../../assets/sustainability.svg"
import humanitydIcon from "../../assets/humanityd.svg"
import behaviorIcon from "../../assets/behavior.svg"
import meaningIcon from "../../assets/meaning.svg"
import sustainabilityImage from "./homepage-image-sustainability.png"
import humanitydImage from "./homepage-image-humanityd.png"
import behaviorImage from "./homepage-image-behavior.png"
import meaningImage from "./homepage-image-meaning.png"
import Button from "../../components/Button"

export default function HomepageTopics() {
  return (
    <For each={homepageTopics} children={({ color, label, icon, text, href, image }) => (
      <section class={homepage['homepage__topics__topic']}>
        <div class={homepage['homepage__topics__topic__content']}>
          <div class={homepage['homepage__topics__topic__content__text']}>
            <h2 class={`${homepage['homepage__topics__topic__content__text__heading']} ${colors[`color-${color}`]}`}>
              <span>{label}</span>
              <img src={icon} alt={`Icon for ${label}`} />
            </h2>
            <p>{text}</p>
          </div>
          <a href={href} class={homepage['homepage__topics__topic__content__button-link']}>
            <Button
              variant="pill"
              fill="outlined"
              label="See Case Study"
              class={homepage['homepage__topics__topic__content__button-link__button']}
            />
          </a>
        </div>
        <div class={homepage['homepage__topics__topic__image']}><img src={image} /></div>
      </section>      
    )} />
  )
}

export const homepageTopics = Object.freeze([
  {
    color: 'sustainability',
    label: 'Sustainability',
    icon: sustainabilityIcon,
    text: `Design must change from being unintentionally destructive to being intentionally constructive. Repairing what has gone wrong. Repairing, collaborating, sustaining.`,
    href: '/sustainability',
    image: sustainabilityImage,
  },
  {
    color: 'humanityd',
    label: 'Humanity-Centered Design',
    icon: humanitydIcon,
    text: `The active practice of designing with entire ecosystems of people in mind. This means designing with the people you’re designing for, and supporting their designs derived from their unique lived experiences.`,
    href: '/humanity-centered-design',
    image: humanitydImage,
  },
  {
    color: 'behavior',
    label: 'Human Behavior',
    icon: behaviorIcon,
    text: `When people are born into an existing society, the beliefs and behaviors of that society seem so natural and reasonable to those who have experienced no other system, that they seldom question or even think it reasonable to change.`,
    href: '/behavior',
    image: behaviorImage,
  },
  {
    color: 'meaning',
    label: 'Meaning',
    icon: meaningIcon,
    text: `Changes must occur with how we teach and how we work, the relationship between work and family life, the economic systems that govern our businesses and economies.`,
    href: '/meaning',
    image: meaningImage,
  },
])