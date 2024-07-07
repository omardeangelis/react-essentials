/* eslint-disable no-nested-ternary */
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

const ConditionalRendering = (props: ConditionalRenderingProps) => {
  if (!props.user) return <MissingUser />
  return props.isLogged ? (
    <div className="flex p-4 rounded-lg bg-green-900 w-full justify-between items-center">
      <p>Ciao {props.user}!</p>
      <Button>{props.isLogged && `Esci`}</Button>
    </div>
  ) : (
    <div className="flex p-4 rounded-lg bg-blue-900 w-full justify-between items-center">
      <p>Inizia ora</p>
      <Button>Inizia</Button>
    </div>
  )
}

const TernaryConditionalRendering = (props: ConditionalRenderingProps) =>
  props.user ? (
    props.isLogged ? (
      <div className="flex p-4 rounded-lg bg-green-900 w-full justify-between items-center">
        <p>Ciao {props.user}!</p>
        <Button>{props.isLogged && `Esci`}</Button>
      </div>
    ) : (
      <div className="flex p-4 rounded-lg bg-blue-900 w-full justify-between items-center">
        <p>Inizia ora</p>
        <Button>{props.isLogged || `Entra`}</Button>
      </div>
    )
  ) : (
    <MissingUser />
  )

export const RisultatoConditionalRendering = () => (
  <div className="flex flex-col space-y-4">
    <ConditionalRendering isLogged user="Mario" />
    <ConditionalRendering isLogged={false} />
    <ConditionalRendering isLogged={false} user="Luigi" />
    <TernaryConditionalRendering isLogged user="Mario" />
    <TernaryConditionalRendering isLogged={false} />
    <TernaryConditionalRendering isLogged={false} user="Patrizio" />
  </div>
)
