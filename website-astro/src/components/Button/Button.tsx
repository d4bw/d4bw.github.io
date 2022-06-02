import { type JSX, mergeProps, splitProps } from "solid-js"
import type { ValueOf } from "../../types"

import button from "@d4bw/styles/src/components/button.module.scss"

interface ButtonProps {
  variant: ValueOf<typeof ButtonVariant>
  fill: ValueOf<typeof ButtonFill>
  label: string
}

export const ButtonVariant = {
  // Sharp: 'sharp',
  // Rounded: 'rounded',
  Pill: 'pill',
} as const

export const ButtonFill = {
  Solid: 'solid',
  Outlined: 'outlined',
} as const

const defaultProps = {
  variant: ButtonVariant.Pill,
  fill: ButtonFill.Solid,
  classList: {},
}

export default function Button(props: ButtonProps & Omit<JSX.IntrinsicElements['button'], 'children'>) {
  const resolved = mergeProps(defaultProps, props)
  const [local, rest] = splitProps(resolved, ['variant', 'fill', 'label', 'class', 'classList'])
  
  return (
    <button
      classList={{
        [button['button']]: true,
        [button[`button--variant--${local.variant}`]]: true,
        [button[`button--fill--${local.fill}`]]: true,
        ...(local.class !== undefined && { [local.class]: true }),
        ...local.classList,
      }}
      {...rest}
    >
      {local.label}
    </button>
  )
}