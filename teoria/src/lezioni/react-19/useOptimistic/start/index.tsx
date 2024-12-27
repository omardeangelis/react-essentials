import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type Message = {
  id: number
  message: string
  isPending: boolean
}

async function deliverMessage(message: string) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
  return message
}

const FormExample = () => {
  const [messages, setMessages] = useState<Message[]>([])

  const formRef = useRef<HTMLFormElement>(null)

  const addMessage = async (formData: FormData) => {
    const message = formData.get(`message`) as string
    formRef.current?.reset()
    const newMessage = await deliverMessage(message)
    setMessages((prev) => [
      ...prev,
      { id: messages.length + 1, message: newMessage, isPending: false },
    ])
  }

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn(
            `flex items-center gap-2 py-2 px-4 bg-blue-950 rounded-md`
          )}
        >
          <p>{message.message}</p>
        </div>
      ))}
      <form className="space-y-4" action={addMessage} ref={formRef}>
        <Input type="text" name="message" placeholder="Message" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
export const UseOptimisticStart = () => <FormExample />
