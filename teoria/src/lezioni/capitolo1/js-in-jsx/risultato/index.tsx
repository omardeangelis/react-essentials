/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

const exampleArray = [1, 2, 3, 4, 5]
// const paragraphArray = exampleArray.map((item) => <p>{item}</p>)
const exampleObject = { nome: `David`, cognome: `Parenzo` }
const complexArray = [
  { nome: `Giuseppe`, cognome: `Cruciani` },
  { nome: `Massimiliano`, cognome: `Minnocci` },
]

export const JSinJSXInizio = () => {
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
        <h2 className="text-lg">Array Iterato</h2>
        <div className="flex gap-5">
          {exampleArray.map((item) => (
            <p key={item} className="text-neutral-400">
              {item}
            </p>
          ))}
          {/* {paragraphArray} */}
        </div>
      </div>
      <hr className="border-t-2 border-gray-800" />
      <div className="space-y-2">
        <h2 className="text-lg">Array di Oggetti</h2>
        <div className="flex flex-col gap-5">
          {complexArray.map((item) => (
            <p key={item.nome} className="text-neutral-400">
              {`${item.nome} ${item.cognome}`}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
