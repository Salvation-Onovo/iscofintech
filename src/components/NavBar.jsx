import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import isco from '../assets/images/isco2.png'
import { LuSearch } from 'react-icons/lu'

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const menuRef = useRef(null)
  const handleToggle = () => {
    setSearchActive((prev) => !prev);
  };


  useEffect(() => {
    const header = document.querySelector("header");

    const handleScroll = () => {
      header.classList.toggle("shadow", window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  useEffect(() => {
    if (isOpen) {
      menuRef.current.style.transform = "translateX(0)";
    } else {
      menuRef.current.style.transform = "translateX(-100%)";
    }
  }, [isOpen])


  return (
    <>
      <header>
        <nav>
          {/* Hamburger menu */}
          <div className='fixed top-0 w-full bg-white lg:hidden items-center flex p-2 shadow-md z-50 '>
            <button className="rounded-full py-3 px-4 bg-blue-950 ml-2 text-white" onClick={() => setIsOpen(true)}>☰</button>
            <Link to={'/'}>
              <img
                className='w-16 h-8 ml-8'
                src={isco}
                alt='Logo' />
            </Link>

            <div className="relative ">
              <div
                ref={menuRef}
                style={{ transform: "translateX(-100%)" }}
                className="fixed inset-y-0 left-0 w-64 bg-white text-blue-950 p-4 transition-transform duration-300 ease-in-out"
              >
                <button onClick={() => setIsOpen(false)} className='absolute top-4 right-4 text-4xl'>×</button>
                <div className='py-12 px-2 text-[22px]'>
                  <div className='mt-5'>
                    <Link to={'/'} className='block text-blue-950 hover:-translate-y-1 hover:scale-110 hover:text-blue-400 transition-transform duration-500'>HOME</Link>
                  </div>
                  <div className='mt-5'>
                    <Link to={'/About'} className='block text-blue-950 hover:-translate-y-1 hover:scale-110 hover:text-blue-400 transition-transform duration-500'>ABOUT</Link>
                  </div>
                  <div className='mt-5'>
                    <Link to={'/Project'} className='block text-blue-950 hover:-translate-y-1 hover:scale-110 hover:text-blue-400 transition-transform duration-500'>PROJECTS</Link>
                  </div>
                  <div className='mt-5'>
                    <Link to={'/Services'} className='block text-blue-950 hover:-translate-y-1 hover:scale-110 hover:text-blue-400 transition-transform duration-500'>SERVICES</Link>
                  </div>
                  <div className='mt-5'>
                    <Link to={'/Contact'} className='block text-blue-950 hover:-translate-y-1 hover:scale-110 hover:text-blue-400 transition-transform duration-500'>CONTACT</Link>
                  </div>
                  <div className='mt-5'>
                    <Link to={'/Portfolio'} className='block  text-blue-950 hover:-translate-y-1 hover:scale-110  hover:text-blue-400 transition-transform duration-500'>PORTFOLIO</Link>
                  </div>

                </div>
              </div>

              {isOpen && (
                <div
                  onClick={() => setIsOpen(false)}
                ></div>
              )}
            </div>

            <div className='relative flex items-center'>
              {searchActive ? (
                <input
                  type='text'
                  className='w-48 h-8 rounded-md border-2 border-blue-950 p-4 ml-28'
                  placeholder='Search'
                  onBlur={() => setSearchActive(false)}
                  autoFocus
                />
              ) : (
                <button
                  onClick={handleToggle}
                  className='p-3 shadow-xl ml-60'
                >
                  <LuSearch />
                </button>
              )}
            </div>

          </div>

          {/*Menu */}
          <div className='fixed top-0 bg-white hidden lg:flex items-center p-6 shadow-xl'>
            <Link to={'/'}>
              <img
                className='w-24 h-10 mx-10'
                src={isco}
                alt='Logo' />
            </Link>

            <div className='flex items-center gap-6 mx-60 text-blue-950'>
              <div>
                <Link to={'/'} className='hover:border-b-2 hover:border-blue-400  hover:text-blue-400 '>HOME</Link>
              </div>
              <div>
                <Link to={'/About'} className='hover:border-b-2 hover:border-blue-400  hover:text-blue-400'>ABOUT</Link>
              </div>
              <div>
                <Link to={'/Project'} className='hover:border-b-2 hover:border-blue-400  hover:text-blue-400'>PROJECTS</Link>
              </div>
              <div>
                <Link to={'/Services'} className='hover:border-b-2 hover:border-blue-400  hover:text-blue-400'>SERVICES</Link>
              </div>
              <div>
                <Link to={'/Contact'} className='hover:border-b-2 hover:border-blue-400  hover:text-blue-400'>CONTACT</Link>
              </div>
              <div>
                <Link to={'/Portfolio'} className='hover:border-b-2 hover:border-blue-400  hover:text-blue-400'>PORTFOLIO</Link>
              </div>

              <div className='relative flex items-center'>
                {searchActive ? (
                  <div>
                    <input
                      type='text'
                      className='w-60 h-10 rounded-md ring-1 p-4'
                      placeholder='Search'
                      onBlur={() => setSearchActive(false)}
                      autoFocus
                    />
                  </div>
                ) : (
                  <button
                    onClick={handleToggle}
                    className='ml-64 p-3 shadow-xl'
                  >
                    <LuSearch />
                  </button>
                )}
              </div>

            </div>

          </div>

        </nav>

      </header>
    </>
  )
}

export default NavBar