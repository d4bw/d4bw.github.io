import Logo from "../Logo"
import footerStyles from "@d4bw/styles/src/components/footer.module.scss"
import logoStyles from "@d4bw/styles/src/components/logo.module.scss"
import { For } from "solid-js"

export default function Footer() {
  return (
    <footer class={footerStyles['footer']}>
      <div class={footerStyles['footer__row']}>
        <div class={footerStyles['footer__row__logo-copyright']}>
          <div class={logoStyles['logo']}><Logo /></div>
          <div class={footerStyles['footer__copyright']}>© 2023 JND.ORG</div>
        </div>
        <For each={footerSections} children={({ label, items}) => (
          <li class={footerStyles['footer__row__section']}>
            <h4 class={footerStyles['footer__row__section__heading']}>{label}</h4>
            <ul class={footerStyles['footer__row__section__items']}>
              <For each={items} children={({ label, href }) => (
                <li class={footerStyles['footer__row__section__items__item']}>
                  <a href={href} class={footerStyles['footer__row__section__items__item__link']}>{label}</a>
                </li>
              )} />
            </ul>
          </li>
        )} />
      </div>
    </footer>
  )
}

type Link = {
  label: string
  href: string
}

type FooterSection = {
  label: string
  items: Link[]
}

const footerSections: readonly FooterSection[] = Object.freeze([
  {
    label: 'Sections',
    items: [
      { label: 'Sustainability', href: '/sustainability' }, 
      { label: 'Humanity-Centered Design', href: '/humanity-centered-design' },
      { label: 'Human Behavior', href: '/human-behavior' },
      { label: 'Meaning', href: '/meaning' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'FAQs', href: '/faq' },
      { label: 'Watch', href: '/TODO' },
      { label: 'Read', href: '/TODO' },
      { label: 'Act', href: '/TODO' },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'Author', href: '/about' },
      { label: 'Acknowledgments', href: '/about' },
    ],
  },
])