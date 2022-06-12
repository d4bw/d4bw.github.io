import { Link } from "./common";

export type HeaderYaml = {
  "nav-items": {
    [itemLabel: string]: HeaderNavItem  
  }
}

export type HeaderNavItemDropdownMenu = {
  type: 'dropdown'
  items: Link[]
};
export type HeaderNavItemLink = { type: 'link' } & Link;

export type HeaderNavItem = HeaderNavItemDropdownMenu | HeaderNavItemLink;