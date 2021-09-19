import React, { FunctionComponent } from "react"
import styles from "./code-block.module.css"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"
import clsx from "clsx"

interface Props {
  code: string
}

const CodeBlock: FunctionComponent<Props> = ({ code }) => {
  return (
    <div className={styles.container}>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={code.trim()}
        language="jsx"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={clsx([styles.pre, className])} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

CodeBlock.displayName = "CodeBlock"

export { CodeBlock }
