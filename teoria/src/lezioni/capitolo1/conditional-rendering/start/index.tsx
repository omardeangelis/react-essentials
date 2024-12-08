/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button"

type ConditionalRenderingProps = {
  isLogged: boolean
  user?: string
}

const MissingUser = () => (
  <div className="flex p-4 rounded-lg bg-red-900 w-full">
    Utente non trovato
  </div>
)

const ConditionalRendering = (props: ConditionalRenderingProps) => (
  <div>Using if</div>
)

const TernaryConditionalRendering = (props: ConditionalRenderingProps) => (
  <div>Using ternary</div>
)

export const InizioConditionalRendering = () => (
  <div className="flex flex-col space-y-4">
    <ConditionalRendering isLogged user="Mario" />
    <ConditionalRendering isLogged={false} />
    <ConditionalRendering isLogged={false} user="Luigi" />
    <TernaryConditionalRendering isLogged user="Mario" />
    <TernaryConditionalRendering isLogged={false} />
  </div>
)
