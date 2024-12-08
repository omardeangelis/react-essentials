/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const GenericAvatar = () => (
  <div className="flex items-center">
    <div className="w-12 h-12 rounded-full bg-neutral-200">
      <img
        src="https://avatars.githubusercontent.com/u/59423080?v=4"
        alt="Avatar"
        className="w-12 h-12 rounded-full"
      />
    </div>

    <div className="ml-4">
      <h2 className="text-lg font-bold">David Parenzo</h2>
      <p className="text-neutral-500">Conduttore Radiofonico</p>
    </div>
  </div>
)

const avatars = [
  {
    img: `https://avatars.githubusercontent.com/u/63757250?v=4`,
    name: `Omar De Angelis`,
    role: `Frontend Developer`,
  },
  {
    img: `https://avatars.githubusercontent.com/u/63757250?v=4`,
    name: `Sempre io`,
    role: `React Developer`,
  },
]

const avatars2 = [
  {
    img: `https://avatars.githubusercontent.com/u/63757250?v=4`,
    name: `N'arta vorta io`,
    role: `Frontend Developer`,
  },
  {
    img: `https://avatars.githubusercontent.com/u/63757250?v=4`,
    name: `Eccomi, buonaseraaa!`,
    role: `React Developer`,
  },
]

export const InizioComponentWithProps = () => <GenericAvatar />
