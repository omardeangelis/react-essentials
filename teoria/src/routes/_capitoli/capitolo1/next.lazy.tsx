import { Link, createLazyFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export const Route = createLazyFileRoute(`/_capitoli/capitolo1/next`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">Mh, non male.</h1>
      <p className="mt-4 max-w-xl text-center text-neutral-400">
        Vedo che hai una soglia dell'attenzione superirore a due scrollate su
        Tiktok. Sei pronto per il prossimo capitolo. E' tutto quello che serve ?
        Si, non crederti tanto speciale.
      </p>
      <div className="flex justify-center gap-4 mt-8">
        <Link to="/capitolo2">
          <Button>Capitolo 2</Button>
        </Link>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Vedi il recap</Button>
          </DialogTrigger>
          <DialogContent className="bg-blue-950">
            <DialogHeader>
              <DialogTitle>Leggiti la documentazione di React</DialogTitle>
              <DialogDescription>
                Perché nessuno legge mai questa maledetta documentazione, ma si
                fidano di uno stronzo qualsiasi che fa un video su Youtube. E'
                gratis pure quella.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <a href="https://react.dev/learn">
                <Button>Leggi la doc</Button>
              </a>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  ),
})
