import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

type State = {
  name: string
  email: string
}

async function handleSubmit(prevState: State[], formData: FormData) {
  const name = formData.get(`name`) as string
  const email = formData.get(`email`) as string
  const newState = [...prevState, { name, email }]
  return newState
}

const FormExample = () => {
  const [state, formAction, isPending] = useActionState(handleSubmit, [])
  return (
    <form className="space-y-4">
      <Input type="text" name="name" placeholder="Name" />
      <Input type="email" name="email" placeholder="Email" />
      <Button type="submit" formAction={formAction} disabled={isPending}>
        Submit
      </Button>
      <ul>
        {state.map((item) => (
          <li key={item.email}>
            {item.name} - {item.email}
          </li>
        ))}
      </ul>
    </form>
  )
}

const handleCartSubmit = async (
  _prevState: { message: string; success: boolean } | null,
  formData: FormData
) => {
  const name = formData.get(`name`) as string
  console.log(formData.get(`premium`))
  const declined = formData.get(`premium`) === `on`
  if (!declined) {
    return {
      message: `${name} aggiunto al carrello`,
      success: true,
    }
  }
  await new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
  return {
    message: `Spedizione veloce non disponibile per questo prodotto`,
    success: false,
  }
}

const CartForm = (props: { premium: boolean }) => {
  const [formState, formAction, isPending] = useActionState(
    handleCartSubmit.bind(props.premium),
    null
  )
  return (
    <form className="space-y-4" action={formAction}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-4 w-full">
          <Input type="text" name="name" placeholder="Item name" />
          <div className="flex items-center gap-2">
            <Checkbox
              inputMode="text"
              name="premium"
              defaultChecked={props.premium}
            />
            <p>Spedizione veloce</p>
          </div>
        </div>
        <Button type="submit" disabled={isPending}>
          Aggiungi al carrello
        </Button>
      </div>
      {formState && (
        <div className="mt-4">
          <p
            className={cn({
              "text-green-500": formState.success,
              "text-red-500": !formState.success,
            })}
          >
            {formState.message}
          </p>
        </div>
      )}
      {isPending && <p>Loading...</p>}
    </form>
  )
}

const StructuredFormExample = () => (
  <div className="space-y-8">
    <CartForm premium={false} />
    <CartForm premium />
  </div>
)

export const UseActionStateResult = () => (
  <div className="space-y-8">
    <FormExample />
    <hr />
    <StructuredFormExample />
  </div>
)
