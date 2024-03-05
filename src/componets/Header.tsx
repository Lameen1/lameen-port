


const Header = () => {
  return (
    <div className=' text-xl flex justify-center sm:justify-between p-7 shadow-lg'>
      <img className='h-14 w-14' src="LW-logo-v2.png" alt="" />
      <ul className='sm:flex hidden gap-5 items-center font-medium'>
        <li>
          <a className="hover:text-gray-400" href="#welcome">Welcome</a>
        </li>
        <li>
          <a className="hover:text-gray-400" href="#about">About Me</a>
        </li>
        <li>
          <a className="hover:text-gray-400" href="#projects">My Projects</a>
        </li>
        <li>
          <a className="hover:text-gray-400" href="#contact">Contact Me</a>
        </li>
      </ul>
    </div>
    
  )
}

export default Header
