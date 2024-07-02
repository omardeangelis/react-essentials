type GenericDivProps = React.ComponentProps<"div">

const GenericAvatar = ({ className, ...rest }: GenericDivProps) => (
  <div {...rest} className={`${className} flex items-center`}>
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

type AvatarProps = {
  img: string
  name: string
  role: string
}

const avatars: AvatarProps[] = [
  {
    img: `https://avatars.githubusercontent.com/u/63757250?v=4`,
    name: `Omar De Angelis`,
    role: `Frontend Developer`,
  },
  {
    img: `https://avatars.githubusercontent.com/u/63757250?v=4`,
    name: `Tu, Spettatore!`,
    role: `Iscriversi al canale!`,
  },
]

const avatars2: AvatarProps[] = [
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

type AvatarWithProps = AvatarProps & GenericDivProps

type AvatarAdvancedProps = React.ComponentProps<typeof GenericAvatar> &
  AvatarProps

const GenericAvatarWithProps = ({
  img,
  role,
  name,
  className,
  ...rest
}: AvatarWithProps | AvatarAdvancedProps) => (
  <div {...rest} className={`${className} flex items-center`}>
    <div className="w-12 h-12 rounded-full bg-neutral-200">
      <img src={img} alt="Avatar" className="w-12 h-12 rounded-full" />
    </div>

    <div className="ml-4">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-neutral-500">{role}</p>
    </div>
  </div>
)

type AvatarWithoutNameAndRole = Omit<AvatarProps, "name" | "role"> &
  GenericDivProps
type AvatarWithChildrenProps = React.PropsWithChildren<AvatarWithoutNameAndRole>

const GenericAvatarWithChildren = ({
  img,
  children,
  className,
  ...rest
}: AvatarWithChildrenProps) => (
  <div {...rest} className={`${className} flex flex-col items-center`}>
    <div className="w-12 h-12 rounded-full bg-neutral-200">
      <img src={img} alt="Avatar" className="w-12 h-12 rounded-full" />
    </div>
    {children}
  </div>
)

export const RisultatoComponentWithProps = () => (
  <>
    <GenericAvatar className="bg-red-600" />
    <div className="mt-4 grid grid-cols-2 gap-4">
      {avatars.map((avatar) => (
        <GenericAvatarWithProps
          key={avatar.name}
          {...avatar}
          className="p-4 bg-neutral-800 rounded-md"
        />
      ))}
    </div>
    <div className="mt-4 grid grid-cols-2 gap-4">
      {avatars2.map((avatar) => (
        <GenericAvatarWithChildren
          key={avatar.name}
          img={avatar.img}
          className="p-4 bg-neutral-800 rounded-md"
        >
          <div className="ml-4">
            <h2 className="text-lg font-bold">{avatar.name}</h2>
            <p className="text-neutral-500">{avatar.role}</p>
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-bold">{avatar.name}</h2>
            <p className="text-neutral-500">{avatar.role}</p>
          </div>
        </GenericAvatarWithChildren>
      ))}
    </div>
  </>
)
