import StorialLogo from '../../../images/storial-logo.svg';

export const Spinner = () => {
  return (
    <div className='spinner-ring'>
      <div className='spinner-contents'>
        <img
          src={StorialLogo}
          alt='Storial Logo'
          className='spinner-logo'
        />      
        <h2 className="spinner-text">...Loading</h2>
      </div>
    </div>
  )
}