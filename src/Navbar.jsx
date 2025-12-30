import { Github, Sun ,PersonStanding} from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white h-15 w-screen flex p-3'>
      <div className=' ml-10 mr-5'>
        <Github className='bg-blue-200 rounded-2xl cursor-pointer'/>
      </div>
      <div className='mr-290'>
        <span className='font-semibold cursor-pointer'>GitFinder</span>
      </div>
      <div className='mr-10'>
        <Sun className='cursor-pointer'/>
      </div>
      <div>
     <PersonStanding className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Navbar
