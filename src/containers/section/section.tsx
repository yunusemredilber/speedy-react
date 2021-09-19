import { FunctionComponent } from "react"
import styles from "./section.module.css"
import { Typography } from "../../components/typography"

interface Props {
  header: string
  secondHeader: string
}

const Section: FunctionComponent<Props> = ({
  children,
  header,
  secondHeader,
}) => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Typography variant="h1">{header}</Typography>
        <Typography variant="h2">{secondHeader}</Typography>
      </header>
      {children}
    </section>
  )
}

Section.displayName = "Section"

export { Section }
