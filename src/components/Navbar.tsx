import { Link } from "@tanstack/react-router";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center bg-base-100 dark:bg-base-300 dark:border-b dark:border-b-gray-700 justify-between p-4 shadow">
      <Link to='/' className="text-success">Typing practice app</Link>
      <div className="flex items-center gap-2">
        <DarkModeToggle />
        <button className="btn btm-nav-sm btn-success">Category</button>
      </div>
    </nav>
  )
}
