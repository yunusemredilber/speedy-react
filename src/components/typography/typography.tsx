import React, { FunctionComponent } from "react"
import styles from "./typography.module.css"
import clsx from "clsx"

const variants = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  p: styles.p,
  code: styles.code,
}

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: keyof typeof variants
}

const Typography: FunctionComponent<Props> = ({
  variant = "p",
  className,
  children,
  ...paragraphProps
}) => {
  const Tag = variant

  return (
    <Tag className={clsx([variants[variant], className])} {...paragraphProps}>
      {children}
    </Tag>
  )
}

Typography.displayName = "Typography"

export { Typography }
