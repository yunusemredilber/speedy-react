import { FunctionComponent } from "react"
import { Typography } from "./typography"

const Code: FunctionComponent = ({ children }) => {
  return <Typography variant="code">{children}</Typography>
}

Code.displayName = "Code"

export { Code }
