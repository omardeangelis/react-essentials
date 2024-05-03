import { createElement } from "react"
import { cn } from "@/lib/utils"

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

type DivProps = React.ComponentProps<"div">

const NewComponent = ({ className, ...rest }: DivProps) => (
  <div className={cn(`p-8 bg-background`, className)} {...rest}>
    <h1 className="text-3xl">Ora si scrivono così</h1>
    <div className="space-y-1 mt-4 text-neutral-400">
      <p>Ne abbiamo fatti di passi avanti...</p>
      <p>
        Ma dietro le quinte, ogni tag che vedi in realtà chiama funzione{` `}
      </p>
      <pre>
        {`React.createElement("div", { className: "p-8" }, "Hello World")`}
      </pre>
    </div>
  </div>
)

export const PrimoComponenteRisultato = () => (
  <div className="space-y-8 pt-6">
    {OldComponent}
    <NewComponent className="bg-blue-800" />
  </div>
)
