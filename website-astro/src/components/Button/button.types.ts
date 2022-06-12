export interface CommonButtonProps {
  variant: 'sharp' | 'rounded' | 'pill'
  fill: 'solid' | 'outlined'
  label: string
  class?: string
}

export interface LinkButtonProps extends CommonButtonProps {
  href: string
}