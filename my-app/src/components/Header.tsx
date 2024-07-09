import logo from '../assets/images/logo-light.svg';

export function Header () {
  return (
    <header className="bg-darkpurple h-[500px]">
      <nav className='py-8 mx-4'>
        <ul className='flex justify-between '>
          <li>
            <a href="#">
              <img src={logo} alt="workit logo"/>
            </a>
          </li>
          <li>
            <a href="#" className='pb-[2px] text-base leading-none text-white border-b-[3px] border-b-eucalyptus font-manrope'>
            Apply for access
          </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
