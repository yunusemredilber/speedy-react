import { FunctionComponent } from "react"
import styles from "./text-section.module.css"
import { Typography } from "../../components/typography"

interface Props {
  header?: string
  secondHeader?: string
  text?: string
}

const TextSection: FunctionComponent<Props> = ({
  text,
  header,
  secondHeader,
  children,
}) => {
  return (
    <section className={styles.container}>
      {header && <Typography variant="h1">{header}</Typography>}
      {secondHeader && <Typography variant="h2">{secondHeader}</Typography>}
      {text && <Typography variant="p">{text}</Typography>}
      {children}
    </section>
  )
}

TextSection.displayName = "TextSection"

export { TextSection }
