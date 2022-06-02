
import { For } from "solid-js"
import Logo from "../Logo";
import logoStyles from "@d4bw/styles/src/components/logo.module.scss"
import headerStyles from "@d4bw/styles/src/components/header.module.scss"

export default function Header() {
  return (
    <header class={headerStyles['header']}>
      <div>
        <a href="/" class={logoStyles['logo']}>
          <Logo />
        </a>
      </div>
      <nav class={headerStyles['header__nav']}>
        <ul class={headerStyles['header__nav__items']}>
          <For each={navItems} children={(item) => {
            switch (item.type) {
              case 'dropdown':
                return headerDropdownNavItem(item)
              case 'link':
                return headerLinkNavItem(item)
            }
          }} />
        </ul>
      </nav>
    </header>
  )
}

function headerDropdownNavItem(item: DropdownNavItem) {
  return (
    <li class={headerStyles['header__nav__items__item']}>
      <div class={headerStyles['header__nav__items__item__dropdown']}>
        <span class={headerStyles['header__nav__items__item__dropdown__label']}>Learn</span>
        <ul class={headerStyles['header__nav__items__item__dropdown__menu']}>
          <For each={item.items} children={({ label, href }) => (
            <li class={headerStyles['header__nav__items__item__dropdown__menu__item']}>
              <a href={href} class={headerStyles['header__nav__items__item__dropdown__menu__item__link']}>{label}</a>  
            </li>
          )} />
        </ul>
      </div>
    </li>
  )
}

function headerLinkNavItem(item: LinkNavItem) {
  return (
    <li class={headerStyles['header__nav__items__item']}>
      <a href={item.href} class={headerStyles['header__nav__items__item__link']}>{item.label}</a>
    </li>
  )
}

type Link = {
  label: string
  href: string
}
type DropdownNavItem = {
  type: 'dropdown'
  label: string
  items: Link[]
}
type LinkNavItem = { type: 'link' } & Link
type NavItem = DropdownNavItem | LinkNavItem

const navItems: readonly NavItem[] = Object.freeze([
  {
    type: 'dropdown',
    label: 'Learn',
    items: [
      { label: 'Sustainability', href: '/sustainability' }, 
      { label: 'Humanity-Centered Design', href: '/humanity-centered-design' },
      { label: 'Human Behavior', href: '/human-behavior' },
      { label: 'Meaning', href: '/meaning' },
    ]
  },
  {
    type: 'link',
    label: 'Resources',
    href: '/resources',
  },
  {
    type: 'link',
    label: 'About',
    href: '/about',
  },
])