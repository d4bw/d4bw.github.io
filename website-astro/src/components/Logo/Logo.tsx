import logoStyles from "@d4bw/styles/src/components/logo.module.scss"
import logoImage from "../../assets/logo.svg"

export default function Logo() {
  return (
    <>
      <img
        src={logoImage}
        alt="Logo for Design for a Better World"
        class={logoStyles['logo__image']}
      />
      <span class={logoStyles['logo__text']}>Design for a<br/>Better World</span>
    </>
  )
}