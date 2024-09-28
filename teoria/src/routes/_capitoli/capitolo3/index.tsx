import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute(`/_capitoli/capitolo3/`)({
  component: () => (
    <div className="p-8">
      <h1 className="text-4xl font-bold">React API</h1>
      <p className="mt-4 text-neutral-400 max-w-2xl">
        Arrivati a questo punto, conosci abbastanza react per sviluppare quasi
        qualsiasi app
      </p>
      <p className="mt-4 text-neutral-400 max-w-2xl">
        Questa è un'ottima occasione per imparare come farlo meglio
      </p>
      <div className="mt-8">
        <h2 className="text-xl font-bold">
          Serie di titoli che non danno nessuna informazione
        </h2>
        <ul className="list-disc list-inside [&>li]:mt-2">
          <li className="text-neutral-400 [&>span]:font-semibold">
            <span>Custom hooks:</span> Crea hooks personalizzati per
            riutilizzare la logica
          </li>
          <li className="text-neutral-400 [&>span]:font-semibold">
            <span className="font-semibold">useContext:</span> Condividere props
            con i componenti figli
          </li>
          <li className="text-neutral-400 [&>span]:font-semibold">
            <span className="font-semibold">React.memo:</span> Evita il
            re-rendering inutilizzato di componenti figli
          </li>
          <li className="text-neutral-400 [&>span]:font-semibold">
            <span className="font-semibold">useCallback:</span> Memorizza
            funzioni per evitare re-creazioni
          </li>
          <li className="text-neutral-400 [&>span]:font-semibold">
            <span className="font-semibold">useMemo:</span> Memorizza valori per
            evitare calcoli ripetuti
          </li>
          <li className="text-neutral-400 [&>span]:font-semibold">
            <span className="font-semibold">useRef:</span> Mantiene valori che
            non devono attivare un re-render
          </li>
        </ul>
        <div className="mt-4" />
      </div>
    </div>
  ),
})
