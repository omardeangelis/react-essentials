import { createElement } from "react"

const OldComponent = createElement(
  `div`,
  { className: `p-8 bg-background`, key: `div` },
  [
    createElement(
      `h1`,
      { className: `text-3xl`, key: `h1-2` },
      `Questo è un componente React`
    ),
    createElement(
      `div`,
      { className: `space-y-1 mt-4 text-neutral-400`, key: `div-4` },
      [
        createElement(
          `p`,
          { key: `3` },
          `Scheeeeeeeerzavo, non è un componente React`
        ),
        createElement(
          `p`,
          {
            key: `4`,
          },
          `Però prima si faceva veramente così, ora si usa JSX`
        ),
      ]
    ),
  ]
)

export const PrimoComponenteInizio = () => (
  <div className="space-y-8 pt-6">{OldComponent}</div>
)
