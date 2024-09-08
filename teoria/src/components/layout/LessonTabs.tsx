import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"

type TabsProps = React.ComponentProps<typeof Tabs>

type Props = {
  risultato: JSX.Element
  start: JSX.Element
} & TabsProps

export const LessonTabs = (props: Props) => (
  <Tabs defaultValue="start" className={cn(`min-w-[678px]`, props.className)}>
    <TabsList className="w-full">
      <TabsTrigger className="w-full" value="start">
        Inizio
      </TabsTrigger>
      <TabsTrigger className="w-full" value="risultato">
        Risultato
      </TabsTrigger>
    </TabsList>
    <TabsContent value="risultato">
      <Card className="pt-6">
        <CardContent>{props.risultato}</CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="start">
      <Card className="pt-6">
        <CardContent>{props.start}</CardContent>
      </Card>
    </TabsContent>
  </Tabs>
)

export const LessonTabIntro = ({ children }: { children: React.ReactNode }) => (
  <Accordion
    type="single"
    collapsible
    className="max-w-2xl w-full bg-violet-700/30 px-4 py-4 rounded-lg shadow-lg mt-4"
  >
    {children}
  </Accordion>
)

type LessonTabContentProps = React.ComponentProps<typeof AccordionItem>

export const LessonTabContent = ({
  children,
  className,
  ...rest
}: LessonTabContentProps) => (
  <AccordionItem {...rest} value="content" className={cn(className)}>
    {children}
  </AccordionItem>
)

export const LessonTabContentTitle = ({
  children,
  className,
  ...rest
}: React.ComponentProps<"p">) => (
  <AccordionTrigger>
    <p {...rest} className={cn(className, `text-lg font-bold`)}>
      Scopri di piu
    </p>
  </AccordionTrigger>
)

export const LessonTabContentText = ({
  children,
  className,
  ...rest
}: React.ComponentProps<"div">) => (
  <AccordionContent {...rest} className={cn(className, `text-neutral-300`)}>
    {children}
  </AccordionContent>
)
