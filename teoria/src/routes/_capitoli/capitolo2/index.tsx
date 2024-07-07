import { createFileRoute } from "@tanstack/react-router"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const regoleDegliHooks = [
  {
    id: 1,
    title: `Non usare hooks dentro un ciclo o condizione`,
    description: `Gli hooks devono essere chiamati sempre nello stesso ordine e sempre all'interno della funzione del componente.`,
  },
  {
    id: 2,
    title: `Usa gli hooks solo all'interno di un componente React`,
    description: `Gli hooks possono essere usati solo all'interno di un componente React, non in funzioni JavaScript normali.`,
  },
  {
    id: 3,
    title: `Usa gli hooks solo all'interno di un componente funzionale`,
    description: `Gli hooks possono essere usati solo all'interno di un componente funzionale, non in un componente di classe.`,
  },
  {
    id: 4,
    title: `Non creare hooks personalizzati che non siano hooks`,
    description: `Gli hooks devono iniziare con "use" e devono essere funzioni JavaScript.`,
  },
]

export const Route = createFileRoute(`/_capitoli/capitolo2/`)({
  component: () => (
    <div className="p-8">
      <h1 className="text-4xl font-bold">React API</h1>
      <p className="mt-4 text-neutral-400 max-w-2xl">
        In questa sezione impareremo ad utilizzare gli hooks. Parleremo anche di
        lifecycle del componente e di un'altra marea di cose che non interessano
        a nessuno dei tuoi amici. Nemmeno ai miei.
      </p>
      <ul className="mt-4 list-disc list-inside">
        <li>
          <a
            href="https://react.dev/reference/rules/rules-of-hooks"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            Docs ufficiale
          </a>
        </li>
      </ul>

      <div className="mt-8">
        <h2 className="text-lg font-bold">
          Iniziamo subito a divertirci: Eccoti delle regole!
        </h2>
        <p className="mt-2 text-neutral-400 max-w-2xl">
          Eccoti alcune regole senza nessun esempio a fianco che ti
          obbligheranno a tornare su questa pagina più volte
        </p>
        <div className="mt-4">
          <Accordion
            type="multiple"
            defaultValue={[`1`]}
            className="bg-card px-4 rounded-md border"
          >
            {regoleDegliHooks.map((rules) => (
              <AccordionItem key={rules.id} value={rules.id.toString()}>
                <AccordionTrigger>
                  <p>{rules.title}</p>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-neutral-400">{rules.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  ),
})
