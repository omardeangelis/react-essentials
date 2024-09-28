/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useRef, useState } from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useChat } from "../hooks/useChat"

export const ChatRoomV2 = ({ serverUrl }: { serverUrl: string }) => {
  const [roomId, setRoomId] = useState(`1`)
  const { chat, messages, setMessages } = useChat(serverUrl, roomId)

  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(formRef.current!)
    const message = formData.get(`message`)
    if (message) {
      setMessages((prev) => [
        ...prev,
        { id: prev.length, text: message as string, roomId },
      ])
      chat.current?.addMessage(message as string)
    }
    formRef.current?.reset()
  }

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="flex gap-2">
          <select
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            className="select"
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
          <p>No message per chi non è iscritto al canale</p>
        )}
      </div>
    </div>
  )
}
