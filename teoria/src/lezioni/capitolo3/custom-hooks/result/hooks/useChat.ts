import { useEffect, useRef, useState } from "react"
import {
  createFakeChat,
  FakeChat,
  Message,
} from "../../../../capitolo2/useEffect/constant/fakeChat"

export const useChat = (serverUrl: string, roomId: string) => {
  const chat = useRef<FakeChat | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  useEffect(() => {
    if (!chat.current) {
      chat.current = createFakeChat()
    } else {
      chat.current.connection({ serverUrl, roomId })
      return () => {
        chat.current?.disconnect()
      }
    }
  }, [serverUrl, roomId])

  useEffect(() => {
    // setRoomId() // CATTIVO
    if (chat.current) {
      console.log(`syncing messages`)
      setMessages(chat.current.getMessages(roomId))
    }
  }, [roomId])

  return { chat, messages, setMessages }
}
