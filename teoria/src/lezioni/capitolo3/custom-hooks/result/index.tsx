import { useIsOnline } from "./hooks/useIsOnline"
import { Input } from "@/components/ui/input"
import { useInputForm } from "./hooks/useInputForm"
import { ChatRoomV2 } from "./components/ChatRoomV2"

const StatusBar = () => {
  const isOnline = useIsOnline()

  return <h1>{isOnline ? `✅ Online` : `❌ Disconnected`}</h1>
}

const StatusUser = () => {
  const isOnline = useIsOnline()

  if (isOnline) {
    return <h2>User component</h2>
  }
  return <h2>User is riconnecting</h2>
}

// Sono singoli stati non uno condiviso

const FormInput = () => {
  const nameInput = useInputForm(`Enzo`)
  const surnameInput = useInputForm(`Spatalino`)
  return (
    <div className="flex flex-col gap-2 ">
      <p>Name</p>
      <Input
        type="text"
        value={nameInput.value}
        onChange={nameInput.handleChange}
      />
      <p>Surname</p>
      <Input
        type="text"
        value={surnameInput.value}
        onChange={surnameInput.handleChange}
      />
      <p className="mt-4 font-bold text-xl text-violet-500">
        {nameInput.value} {surnameInput.value}
      </p>
    </div>
  )
}

export const CustomHooksResult = () => (
  <div className="flex flex-col gap-4">
    <StatusBar />
    <StatusUser />
    <hr className="border-1 border-gray-700" />
    <FormInput />
    <hr className="border-1 border-gray-700" />
    <ChatRoomV2 serverUrl="https://localhost:3000" />
  </div>
)
