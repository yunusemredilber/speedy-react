import { FunctionComponent } from "react"
import styles from "./code-with-result.module.css"
import { CodeBlock } from "../code-block"

interface Props {
  code: string
}

const CodeWithResult: FunctionComponent<Props> = ({ code, children }) => {
  return (
    <div className={styles.container}>
      <CodeBlock code={code} />
      {children}
    </div>
  )
}

CodeWithResult.displayName = "CodeWithResult"

export { CodeWithResult }
