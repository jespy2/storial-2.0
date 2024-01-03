import { Logout, ModeToggle } from '../..'
import { useAppSelector } from '../../../hooks'

export const Header = ({ title }: { title: string }) => {
  const loggedInState = useAppSelector((state) => state.auth.auth.isAuthenticated)
  return (
    <>
      {loggedInState && <Logout />}
      <ModeToggle />
      <div className='header-container'>
        <img
          src='/storial-logo.png'
          alt='Storial Logo'
          className='header-logo'
        />
        <h1 className='header-title'>{title}</h1>
      </div>
    </>
  )
}