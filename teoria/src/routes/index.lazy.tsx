import { Link, createLazyFileRoute } from "@tanstack/react-router"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const requirements = [
  {
    name: `HTML && CSS`,
    description: `Conoscenza base di HTML e CSS`,
    links: [
      {
        name: `HTML`,
        url: `https://youtu.be/Yju1Ixnpi28`,
      },
      {
        name: `CSS`,
        url: `https://youtu.be/lRCODCb5NVo`,
      },
    ],
  },
  {
    name: `JavaScript`,
    description: `Conoscenza base di JavaScript`,
    links: [
      {
        name: `JavaScript`,
        url: `https://youtu.be/KySn2aL_pOg`,
      },
    ],
  },
  {
    name: `Typescript`,
    description: `Conoscenza base di Typescript`,
    links: [
      {
        name: `Typescript`,
        url: `https://youtu.be/8j8cbjiHnN0`,
      },
    ],
  },
]

const Index = () => (
  <div className="mt-8 container">
    <div className="text-2xl font-bold">Ciao!</div>
    <h3 className="mt-2">Benvenuto nel tuo nuovo corso preferito di React</h3>
    <Requirements />
    <div className="mt-8 space-y-4">
      <h2 className="text-lg font-bold">Complimenti!</h2>
      <p className="mt-2">
        Ora sei pronto per beccarti altre cose da imparare, codice da scrivere e
        progetti orribili da realizzare
      </p>
      <div>
        <Link to="/capitolo1">
          <Button type="button">Inizia</Button>
        </Link>
      </div>
    </div>
  </div>
)

const Requirements = () => (
  <div className="mt-8">
    <h2 className="text-lg font-bold">Requisiti</h2>
    <p className="mt-2">
      Prima di iniziare il corso devi esserti sorbito almeno tutte queste
      informazioni greatuite
    </p>
    <div className="flex w-full justify-between gap-8 mt-8">
      {requirements.map((requirement) => (
        <Card key={requirement.name} className="w-full">
          <CardHeader>
            <CardTitle>
              <h3>{requirement.name}</h3>
            </CardTitle>
            <CardDescription>
              <p>{requirement.description}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              {requirement.links.map((link) => (
                <li key={link.url}>
                  {
                    <a href={link.url} target="_blank" rel="noreferrer">
                      {link.name}:{` `}
                      <span className="dark:text-blue-600">{link.url} </span>
                    </a>
                  }
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
)

export const Route = createLazyFileRoute(`/` as unknown as never)({
  component: Index,
})
