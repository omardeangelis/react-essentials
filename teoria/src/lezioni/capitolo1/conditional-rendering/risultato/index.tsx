import { Button } from "@/components/ui/button"

type ConditionalRenderingProps = {
  isLogged: boolean
  user?: string
}

const ConditionalRendering = ({
  isLogged,
  user,
}: ConditionalRenderingProps) => {
  if (!user) {
    return <MissingUser />
  }
  return (
    <div>
      {isLogged ? (
        <div className="flex p-4 rounded-lg bg-green-900 w-full justify-between items-center">
          <p>Ciao {user}!</p>
          <Button>{isLogged && `Esci`}</Button>
        </div>
      ) : (
        <div className="flex p-4 rounded-lg bg-blue-900 w-full justify-between items-center">
          <p>Inizia ora</p>
          <Button>Inizia</Button>
        </div>
      )}
    </div>
  )
}

const TernaryConditionalRendering = ({
  isLogged,
  user,
}: ConditionalRenderingProps) => (
  <div>
    {isLogged ? (
      <div className="flex p-4 rounded-lg bg-yellow-900 w-full justify-between items-center">
        <p>Ciao {user || `Inizia ora`}!</p>
        <Button>{isLogged && `Esci`}</Button>
      </div>
    ) : (
      <div className="flex p-4 rounded-lg bg-purple-950 w-full justify-between items-center">
        <p>Inizia ora</p>
        <Button>Inizia</Button>
      </div>
    )}
  </div>
)

const MissingUser = () => (
  <div className="flex p-4 rounded-lg bg-red-900 w-full">
    Utente non trovato
  </div>
)

export const RisultatoConditionalRendering = () => (
  <div className="flex flex-col space-y-4">
    <ConditionalRendering isLogged user="Mario" />
    <ConditionalRendering isLogged={false} />
    <ConditionalRendering isLogged={false} user="Luigi" />
    <TernaryConditionalRendering isLogged user="Mario" />
    <TernaryConditionalRendering isLogged={false} />
  </div>
)
