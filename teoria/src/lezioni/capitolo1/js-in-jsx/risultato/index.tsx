const exampleArray = [1, 2, 3, 4, 5]
const exampleObject = { nome: `David`, cognome: `Parenzo` }
const complexArray = [
  { nome: `Giuseppe`, cognome: `Cruciani` },
  { nome: `Filippo`, cognome: `Minnocci` },
]

export const JSinJSXRisultato = () => {
  const risultato = 1 + 1
  return (
    <div className="space-y-4 pt-6">
      <div className="space-y-2">
        <h2 className="text-lg">Valore</h2>
        <p className="text-neutral-400">{risultato}</p>
        <p className="text-neutral-400">{1 + 1}</p>
      </div>
      <hr className="border-t-2 border-gray-800" />
      <div className="space-y-2">
        <h2 className="text-lg">Array</h2>
        <p className="text-neutral-400">{exampleArray}</p>
      </div>
      <hr className="border-t-2 border-gray-800" />

      <div className="space-y-2">
        <h2 className="text-lg">Oggetto</h2>
        <p className="text-neutral-400">
          {`${exampleObject.nome} ${exampleObject.cognome}`}
        </p>
      </div>
      <hr className="border-t-2 border-gray-800" />

      <div className="space-y-2">
        <h2 className="text-lg">Iterare un array</h2>
        <div className="text-neutral-400 flex gap-5">
          {exampleArray.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      <hr className="border-t-2 border-gray-800" />

      <div className="space-y-2">
        <h2 className="text-lg">Array complesso</h2>
        <p className="text-neutral-400">
          {complexArray.map((persona) => (
            <p key={persona.cognome}>
              {persona.nome} {persona.cognome}
            </p>
          ))}
        </p>
      </div>
    </div>
  )
}
