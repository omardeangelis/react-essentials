import { FormEvent, useEffect, useRef, useState } from "react"
import { createFakeChat, FakeChat } from "../constant/fakeChat"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const ChatRoom = ({ serverUrl }: { serverUrl: string }) => {
  const [roomId, setRoomId] = useState(`1`)

  const chat = useRef<FakeChat | null>(null)

  const [messages, setMessages] = useState(
    chat.current?.getMessages(roomId) ?? []
  )

  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const message = formData.get(`message`) as string
    setMessages([...messages, { id: messages.length, text: message, roomId }])
    chat.current?.addMessage(message)
    formRef.current?.reset()
  }

  useEffect(() => {
    if (!chat.current) {
      chat.current = createFakeChat()
    } else {
      chat.current?.connection({ serverUrl, roomId })
      return () => {
        chat.current?.disconnect()
      }
    }
  }, [serverUrl, roomId])

  useEffect(() => {
    console.log(`roomId: ${roomId}`)
    setMessages(chat.current?.getMessages(roomId) ?? [])
  }, [roomId])

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="flex gap-2">
          <select
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            className="select "
          >
            <option value="1">Room 1</option>
            <option value="2">Room 2</option>
            <option value="3">Room 3</option>
          </select>
          <Input type="text" name="message" />
          <Button type="submit">Add Message</Button>
        </div>
      </form>
      <div className="p-4 border rounded-md">
        {messages.length > 0 ? (
          <ul className="flex flex-col gap-2">
            {messages.map((message) => (
              <li key={message.id}>{message.text}</li>
            ))}
          </ul>
        ) : (
          <p>No messages yet for this room</p>
        )}
      </div>
    </div>
  )
}
export const UseEffectResult = () => (
  <div className="flex flex-col gap-4">
    <ChatRoom serverUrl="http://localhost:1234" />
  </div>
)
