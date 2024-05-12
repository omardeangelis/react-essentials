import { createLazyFileRoute } from "@tanstack/react-router"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const sources = [
  {
    name: `Remotion`,
    url: `https://www.remotion.dev/`,
    description: `Create real MP4 videos using React.`,
  },
  {
    name: `React Three Fiber`,
    url: `https://docs.pmnd.rs/react-three-fiber/getting-started/introduction`,
    description: `A React renderer for Three.js.`,
  },
  {
    name: `Resend`,
    url: `https://resend.com/`,
    description: `Email for developers.`,
  },
  {
    name: `React-pdf`,
    url: `https://react-pdf.org/`,
    description: `Create PDF files using React.`,
  },
  {
    name: `React Spring`,
    url: `https://react-spring.io/`,
    description: `Spring-physics based animation library.`,
  },
  {
    name: `React Native`,
    url: `https://reactnative.dev/`,
    description: `Build mobile apps using React.`,
  },
]

type Source = (typeof sources)[number]

const Index = () => (
  <div className="p-8">
    <h1 className="text-3xl">Ah quindi vorresti sapere che cosa sia React ?</h1>
    <div className="space-y-1 mt-4 text-neutral-400">
      <p>E io ora te lo dico. Beccati sto spiegone, così impari</p>
      <p>
        Non preoccuparti, qui sotto troverai tutte le fonti che potrai ignorare
      </p>
    </div>

    <div className="mt-8">
      <h2 className="text-lg font-bold">
        Altri modi che non ti interessano per usare React
      </h2>
    </div>
    <div className="mt-8 grid grid-cols-2 gap-4">
      {sources.map((source) => (
        <Reference key={source.url} {...source} />
      ))}
    </div>
  </div>
)

const Reference = (props: Source) => (
  <Card className="w-full flex items-center justify-between min-w-48">
    <CardHeader>
      <CardTitle>{props.name}</CardTitle>
      <CardDescription>{props.description}</CardDescription>
    </CardHeader>
    <CardContent className="flex items-center mb-0 py-0">
      <a href={props.url} target="_blank" rel="noreferrer">
        <Button type="button">Vai al sito</Button>
      </a>
    </CardContent>
  </Card>
)

export const Route = createLazyFileRoute(`/_capitoli/capitolo1/`)({
  component: Index,
})
