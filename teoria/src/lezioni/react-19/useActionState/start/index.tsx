import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

export const UseActionStateStart = () => (
  <div className="space-y-8">
    <FormExample />
    <hr />
    <CartForm premium={false} />
    <hr />
    <CartForm premium />
  </div>
)

const FormExample = () => (
  <form className="space-y-4">
    <Input type="text" name="name" placeholder="Name" />
    <Input type="email" name="email" placeholder="Email" />
    <Button type="submit">Submit</Button>
  </form>
)

const CartForm = (props: { premium: boolean }) => (
  <form className="space-y-4">
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
      <Button type="submit">Aggiungi al carrello</Button>
    </div>
  </form>
)
