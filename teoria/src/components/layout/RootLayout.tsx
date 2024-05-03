import { Link } from "@tanstack/react-router"
import { SheetMenu } from "./DrawerMenu"
import ReactLogo from "../../assets/react.svg"

export const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <nav className="w-full bg-background border h-16 flex justify-center fixed top-0 z-10">
      <div className="container flex justify-center">
        <ul className="w-full flex items-center justify-between">
          <li>
            <Link to="/">
              <img src={ReactLogo} alt="logo" />
            </Link>
          </li>
          <li>
            <SheetMenu />
          </li>
        </ul>
      </div>
    </nav>
    <div className="h-16" />
    <main className="bg-background">{children}</main>
  </>
)
