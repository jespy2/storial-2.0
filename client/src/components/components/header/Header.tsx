import { Logout, ModeToggle } from '../..'
import { useAppSelector } from '../../../hooks'

import StorialLogo from '../../../images/storial-logo.svg';

export const Header = ({ title }: { title: string }) => {
  const loggedInState = useAppSelector((state) => state.auth.auth.isAuthenticated)
  return (
    <>
      {loggedInState && <Logout />}
      <ModeToggle />
      <div className='header-container'>
        <img
          src={StorialLogo}
          alt='Storial Logo'
          className='header-logo'
        />
        <h1 className='header-title'>{title}</h1>
      </div>
    </>
  )
}