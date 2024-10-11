import { Menu } from "lucide-react"
import { Link } from "@tanstack/react-router"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"

export const SheetMenu = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">
        <Menu />
      </Button>
    </SheetTrigger>
    <SheetContent side="right" className="h-full">
      <SheetHeader>
        <SheetTitle>Azz, hai trovato l'indice</SheetTitle>
        <SheetDescription>Ora ti tocca imparare</SheetDescription>
      </SheetHeader>
      <div className="mt-4">
        <Button
          asChild
          variant="link"
          className="cursor-pointer"
          onClick={() =>
            window.open(`https://donate.stripe.com/eVabLG42xh204iQbII`)
          }
        >
          <div className="bg-card w-full bg-violet-900 rounded-lg border text-white">
            Sostieni il canale
          </div>
        </Button>
      </div>
      <div className="mt-4">
        <Button
          asChild
          variant="link"
          className="cursor-pointer"
          onClick={() => window.open(`https://www.youtube.com/@Out-of-Class`)}
        >
          <div className="bg-card w-full bg-red-800 text-white rounded-lg border">
            Iscriviti al canale
          </div>
        </Button>
      </div>
      <ul className="mt-8">
        <SheetClose asChild>
          <Link to="/capitolo1">
            <li className="bg-card p-4 rounded-lg border hover:bg-blue-950">
              <p>React for Newbies</p>
              <p className="text-sm text-neutral-400 mt-2">
                Parti dalle basi, costruisci e tipizza i tuoi primi componenti
              </p>
            </li>
          </Link>
        </SheetClose>
        <div className="mt-4" />
        <SheetClose asChild>
          <Link to="/capitolo2">
            <li className="bg-card p-4 rounded-lg border hover:bg-blue-950">
              <p>React API</p>
              <p className="text-sm text-neutral-400 mt-2">
                Impara a usare gli hooks, effects e references e crea
                un'applicazione
              </p>
            </li>
          </Link>
        </SheetClose>
        <div className="mt-4" />
        <SheetClose asChild>
          <Link to="/capitolo3">
            <li className="bg-card p-4 rounded-lg border hover:bg-blue-950">
              <p>Improve your app</p>
              <p className="text-sm text-neutral-400 mt-2">
                Hook & API, lifecycle & context per sviluppare app più
                efficienti
              </p>
            </li>
          </Link>
        </SheetClose>
      </ul>
    </SheetContent>
  </Sheet>
)
