import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { ChatRoomV2 } from "./components/ChatRoomV2"

const StatusBar = () => {
  const [isOnline, setIsOnline] = useState(true)
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true)
    }
    function handleOffline() {
      setIsOnline(false)
    }
    window.addEventListener(`online`, handleOnline)
    window.addEventListener(`offline`, handleOffline)
    return () => {
      window.removeEventListener(`online`, handleOnline)
      window.removeEventListener(`offline`, handleOffline)
    }
  }, [])

  return <h1>{isOnline ? `✅ Online` : `❌ Disconnected`}</h1>
}

const StatusUser = () => {
  const [isOnline, setIsOnline] = useState(true)
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true)
    }
    function handleOffline() {
      setIsOnline(false)
    }
    window.addEventListener(`online`, handleOnline)
    window.addEventListener(`offline`, handleOffline)
    return () => {
      window.removeEventListener(`online`, handleOnline)
      window.removeEventListener(`offline`, handleOffline)
    }
  }, [])
  if (isOnline) {
    return <h2>User component</h2>
  }
  return <h2>User is riconnecting</h2>
}

const FormInput = () => {
  const [name, setName] = useState(`Iscriviti`)
  const [surname, setSurname] = useState(`Al Canale`)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value)
  }
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

export const CustomHooksStart = () => (
  <div className="flex flex-col gap-4">
    <StatusBar />
    <StatusUser />
    <hr className="border-1 border-gray-700" />
    <FormInput />
    <hr className="border-1 border-gray-700" />
    <ChatRoomV2 serverUrl="https://localhost:3000" />
  </div>
)
