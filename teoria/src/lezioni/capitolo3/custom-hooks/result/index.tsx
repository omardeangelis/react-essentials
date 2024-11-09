import { Input } from "@/components/ui/input"
import { ChatRoomV2 } from "./components/ChatRoomV2"
import { useIsOnline } from "./hooks/useIsOnline"
import { useInputForm } from "./hooks/useInputForm"

const StatusBar = () => {
  const isOnline = useIsOnline()

  return <h1>{isOnline ? `✅ Online` : `❌ Disconnected`}</h1>
}

const StatusUser = () => {
  const isOnline = useIsOnline()
  if (isOnline) {
    return <h2>User component</h2>
  }
  return <h2>User se sta connettenno ao</h2>
}

const FormInput = () => {
  const { value: name, handleChange: handleNameChange } =
    useInputForm(`Iscriviti`)
  const { value: surname, handleChange: handleSurnameChange } =
    useInputForm(`Al Canale`)

  return (
    <div className="flex flex-col gap-2 ">
      <p>Name</p>
      <Input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <p>Surname</p>
      <Input
        id="surname"
        name="surname"
        type="text"
        value={surname}
        onChange={handleSurnameChange}
      />
      <p className="mt-4 font-bold text-xl text-violet-500">
        {name} {surname}
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
