import { Github, Sun ,PersonStanding} from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white w-full px-4 sm:px-8 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Github className="bg-blue-200 rounded-xl p-1 cursor-pointer w-8 h-8 sm:w-9 sm:h-9" />
        <span className="font-semibold text-lg cursor-pointer">
          GitFinder
        </span>
      </div>

      <div className="flex items-center gap-4">
        <Sun className="cursor-pointer w-6 h-6 sm:w-7 sm:h-7" />
        <PersonStanding className="cursor-pointer w-6 h-6 sm:w-7 sm:h-7" />
      </div>
    </nav>
  )
}

export default Navbar
