import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

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
      <Card>
        <CardContent>{props.risultato}</CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="start">
      <Card>
        <CardContent>{props.start}</CardContent>
      </Card>
    </TabsContent>
  </Tabs>
)
