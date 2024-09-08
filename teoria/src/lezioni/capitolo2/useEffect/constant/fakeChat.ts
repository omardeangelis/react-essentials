type CreateFakeChatProps = { serverUrl: string; roomId: string }

export type Message = {
  id: number
  text: string
  roomId: string
}

export const createFakeChat = () => {
  let messages: Message[] = []
  const config = { serverUrl: ``, roomId: `` }
  const connection = ({ serverUrl, roomId }: CreateFakeChatProps) => {
    config.serverUrl = serverUrl
    config.roomId = roomId
    console.log(
      `Connecting to ${config.serverUrl} with roomId ${config.roomId}`
    )
  }
  const disconnect = () => {
    console.log(
      `Disconnecting from ${config.serverUrl} with roomId ${config.roomId}`
    )
  }
  const addMessage = (message: string) => {
    const newMessage: Message = {
      id: messages.length,
      text: message,
      roomId: config.roomId,
    }
    messages.push(newMessage)
  }

  const getMessages = (selectedRoomId: string) =>
    messages.filter((message) => message.roomId === selectedRoomId)
  const clearMessages = () => {
    messages = []
  }

  return {
    messages,
    addMessage,
    getMessages,
    connection,
    disconnect,
    clearMessages,
  }
}

export type FakeChat = ReturnType<typeof createFakeChat>
