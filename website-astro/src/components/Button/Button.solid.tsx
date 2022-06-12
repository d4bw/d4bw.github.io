import { type JSX, mergeProps, splitProps } from "solid-js"
import c from "@/utils/c"

import button from "~/styles/src/components/button.module.scss"

import type { CommonButtonProps } from "./button.types"

export interface ButtonProps extends CommonButtonProps, Omit<JSX.IntrinsicElements['button'], 'children' | 'classList'> {

}

const defaultProps = {
  variant: 'pill',
  fill: 'solid',
}

export default function Button(props: ButtonProps) {
  const resolved = mergeProps(defaultProps, props)
  const [local, rest] = splitProps(resolved, ['variant', 'fill', 'label', 'class'])
  
  return (
    <button
      class={c(
        button['button'],
        button[`button--variant--${local.variant}`],
        button[`button--fill--${local.fill}`],
        local.class,
      )}
      {...rest}
    >
      {local.label}
    </button>
  )
}