import type { Link } from "./common"

export type FooterYaml = {
  columns: {
    [columnName: string]: Link[]
  }
}