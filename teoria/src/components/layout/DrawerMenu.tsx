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
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Azz, hai trovato l'indice</SheetTitle>
        <SheetDescription>Ora ti tocca imparare</SheetDescription>
      </SheetHeader>
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
      </ul>
    </SheetContent>
  </Sheet>
)
