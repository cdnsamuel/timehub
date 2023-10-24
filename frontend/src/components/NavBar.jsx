import { Link } from 'react-router-dom'
import pp from '/1.png'
import { useGlitch } from 'react-powerglitch'
import logo from '../assets/logo.png'
import cleo from '/2.png'
import { useEffect, useState } from 'react'
import not from '/not.png'
import deco from '/deco.png'

const NavBar = ({ ok }) => {
  const glitch = useGlitch()
  const [notif, setNotif] = useState(false)
  const [control, setControl] = useState(true)

  const handleFuckUbitch = () => {
    localStorage.clear()
  }

  useEffect(() => {
    if (control === true) {
      setTimeout(() => {
        setNotif(true)
      }, 60000)
    }
  }, [])
  return (
    <div className='md:flex md:justify-center md:mt-2'>
      <a href='../pages/Home.jsx'></a>
      <div
        id='nav'
        className='hidden md:w-full md:max-w-5xl md:flex md:items-center md:justify-between md:border-b-2 md:border-primary md:pb-2'
      >
        <div id='logo' className=' relative rounded-lg overflow-hidden'>
          <span ref={glitch.ref}>
            <Link to='/'>
              <div className='absolute inset-0 border-gradient-animation '></div>
              <img src={logo} alt='' className='w-36' />
            </Link>
          </span>
        </div>
        <div className='flex gap-10 mr-10 items-center'>
          <span ref={glitch.ref}>
            <Link to='/search'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-12 w-12 rounded-full p-1'
                viewBox='-2 -3 28 28'
                stroke='hsl(var(--s))'
              >
                <path
                  xmlns='http://www.w3.org/2000/svg'
                  d='M9.08 6.10352e-05C4.56875 6.10352e-05 0.919998 3.64881 0.919998 8.16006C0.919998 12.6713 4.56875 16.3201 9.08 16.3201C10.6906 16.3201 12.1812 15.8476 13.445 15.0451L19.34 20.9401L21.38 18.9001L15.56 13.0951C16.6062 11.7226 17.24 10.0219 17.24 8.16006C17.24 3.64881 13.5912 6.10352e-05 9.08 6.10352e-05ZM9.08 1.92006C12.5356 1.92006 15.32 4.70444 15.32 8.16006C15.32 11.6157 12.5356 14.4001 9.08 14.4001C5.62437 14.4001 2.84 11.6157 2.84 8.16006C2.84 4.70444 5.62437 1.92006 9.08 1.92006Z'
                  fill='hsl(var(--s))'
                />
              </svg>
            </Link>
          </span>

          <details className='dropdown dropdown-end '>
            <summary className='m-1 btn hover:bg-transparent bg-transparent hover:border-transparent border-transparent'>
              <span ref={glitch.ref}>
                {notif && <img src={not} className='absolute w-4' />}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-12 w-12 rounded-full text-secondary p-1'
                  fill='none'
                  viewBox='-1 0 28 25'
                  stroke='currentColor'
                  onClick={() => {
                    setControl(false)
                  }}
                >
                  <path
                    xmlns='http://www.w3.org/2000/svg'
                    d='M12.5 0C11.4004 0 10.5 0.900391 10.5 2C10.5 2.25781 10.5508 2.50781 10.6406 2.73438C7.82812 3.46484 6 5.9082 6 9C6 12.916 5.03906 14.6992 4.125 15.7031C3.66797 16.2051 3.2168 16.5098 2.82812 16.7969C2.63281 16.9395 2.45508 17.082 2.29688 17.2656C2.13867 17.4492 2 17.7109 2 18C2 18.6875 2.42188 19.2715 3.01562 19.6562C3.60938 20.041 4.38867 20.2891 5.32812 20.4844C6.54688 20.7363 8.05078 20.8691 9.70312 20.9375C9.57812 21.2695 9.5 21.627 9.5 22C9.5 23.6504 10.8496 25 12.5 25C14.1504 25 15.5 23.6504 15.5 22C15.5 21.625 15.4238 21.2676 15.2969 20.9375C16.9492 20.8691 18.4531 20.7363 19.6719 20.4844C20.6113 20.2891 21.3906 20.041 21.9844 19.6562C22.5781 19.2715 23 18.6875 23 18C23 17.7109 22.8613 17.4492 22.7031 17.2656C22.5449 17.082 22.3672 16.9395 22.1719 16.7969C21.7832 16.5098 21.332 16.2051 20.875 15.7031C19.9609 14.6992 19 12.916 19 9C19 5.91016 17.168 3.46875 14.3594 2.73438C14.4492 2.50781 14.5 2.25781 14.5 2C14.5 0.900391 13.5996 0 12.5 0ZM12.5 1C13.0586 1 13.5 1.44141 13.5 2C13.5 2.55859 13.0586 3 12.5 3C11.9414 3 11.5 2.55859 11.5 2C11.5 1.44141 11.9414 1 12.5 1ZM13.6719 3.59375C16.3379 4.06836 18 6.12891 18 9C18 13.084 19.0391 15.1816 20.125 16.375C20.668 16.9707 21.2168 17.3438 21.5781 17.6094C21.7578 17.7422 21.8926 17.8535 21.9531 17.9219C22.0137 17.9902 22 17.9844 22 18C22 18.3125 21.8555 18.541 21.4375 18.8125C21.0195 19.084 20.3398 19.3359 19.4688 19.5156C17.7266 19.877 15.2461 20 12.5 20C9.75391 20 7.27344 19.877 5.53125 19.5156C4.66016 19.3359 3.98047 19.084 3.5625 18.8125C3.14453 18.541 3 18.3125 3 18C3 17.9844 2.98633 17.9902 3.04688 17.9219C3.10742 17.8535 3.24219 17.7422 3.42188 17.6094C3.7832 17.3438 4.33203 16.9707 4.875 16.375C5.96094 15.1816 7 13.084 7 9C7 6.13086 8.66406 4.08594 11.3281 3.60938C11.6602 3.85352 12.0605 4 12.5 4C12.9434 4 13.3398 3.8418 13.6719 3.59375ZM10.7812 20.9688C11.3418 20.9805 11.9121 21 12.5 21C13.0879 21 13.6582 20.9805 14.2188 20.9688C14.3965 21.2695 14.5 21.625 14.5 22C14.5 23.1113 13.6113 24 12.5 24C11.3887 24 10.5 23.1113 10.5 22C10.5 21.6211 10.5996 21.2695 10.7812 20.9688Z'
                    fill='black'
                  />
                </svg>
              </span>
            </summary>

            <ul className='p-2 h-24  shadow menu dropdown-content z-[1] rounded-box w-[20rem] mt-8 bg-primary flex '>
              <li
                className='-0'
                onClick={() => {
                  setNotif(false)
                }}
              >
                <div className='flex items-center '>
                  {notif ? (
                    <Link to='/Profile/2' className='flex items-center '>
                      <img src={cleo} alt='' className='w-16 flex mr-4' />
                      <p className='text-base-100  font-semibold'>
                        Cléopatre viens de poster
                      </p>
                    </Link>
                  ) : (
                    <p className=' m-auto text-lg font-semibold text-base-100 leading-[4rem]'>
                      Aucune notification
                    </p>
                  )}
                </div>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div
        id='nav tel'
        className='flex items-center justify-between border-b-2 border-primary p-3 md:hidden'
      >
        {ok && (
          <Link
            ref={glitch.ref}
            to='/profile/1'
            className='flex items-center gap-4'
          >
            <div id='pp' className='flex flex-initial'>
              <img
                src={pp}
                alt=''
                className='w-16 border-2 border-primary rounded-full'
              />
            </div>
          </Link>
        )}
        <div id='logo' className=' relative rounded-lg overflow-hidden '>
          <Link ref={glitch.ref} to='/'>
            <div className='absolute inset-0 border-gradient-animation'></div>
            <img src={logo} alt='' className='w-36' />
          </Link>
        </div>
        {ok && (
          <div>
            <a href='/'>
              <img src={deco} alt='' onClick={handleFuckUbitch} />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
