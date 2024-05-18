import React from 'react'
import isco from '../assets/images/isco2.png'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <>
      <div className='lg:flex justify-between bg-blue-950 py-8'>
        <div className='m-10'>
          <div className=''>
            <Link to='/' className='flex justify-center'>
              <img
                src={isco}
                className='w-20 h-10 mx-10'
                alt='ISCO Logo'
              />
            </Link>
            <div className='mt-4 text-gray-400 font-semibold'>
              <p className='flex justify-center text-xs'>ISCOFINTECH Ltd is a company that is connected to its clients </p>
              <p className='flex justify-center text-xs'>serving them with quality projects. We are</p>
              <p className='flex justify-center text-xs'>flexible, innovative, nimble, trust-worthy, fast-paced and</p>
              <p className='flex justify-center text-xs'>energetic following industry standard</p>
            </div>
            <div className='text-white'>
              <p className='flex justify-center text-base font-semibold my-2 te'>WANT TO HIRE US?</p>
              <p className='flex justify-center text-sm items-center text-gray-400'>Call:<span className='font-semibold text-sm ml-1 text-white'>(+234) 8107887963</span></p>
              <p className='flex justify-center text-sm items-center text-gray-400'>Email:<span className='font-semibold text-sm ml-1 text-white'>info@iscofintech.com</span></p>
            </div>
          </div>

          <div className='flex justify-center my-6 gap-2'>
            <Link to={''}>
              <SocialIcon network="linkedin" style={{ height: 25, width: 25 }} />
            </Link>
            <Link to={''}>
              <SocialIcon network="instagram" style={{ height: 25, width: 25 }} />
            </Link>
            <Link to={''}>
              <SocialIcon network="twitter" style={{ height: 25, width: 25 }} />
            </Link>
            <Link to={''}>
              <SocialIcon network="github" style={{ height: 25, width: 25 }} />
            </Link>
            <Link to={''}>
              <SocialIcon network="telegram" style={{ height: 25, width: 25 }} />
            </Link>
          </div>

          <div className='flex justify-center'>
            <p className='text-sm text-white'>© All rights reserved 2021 | Terms and Condition</p>
          </div>
        </div>


        <div className='hidden lg:flex m-10 gap-24'>

          <div className=''>
            <h1 className='text-xl text-white'>Company</h1>
            <div className='flex flex-col mt-3 gap-y-3 text-gray-400'>
              <div>
                <Link to={'/'} className='block hover:-translate-y-1 hover:scale-110 hover:text-white transition-transform duration-500'>About</Link>
              </div>
              <div>
                <Link to={'/'} className='block hover:-translate-y-1 hover:scale-110 hover:text-white transition-transform duration-500'>Services</Link>
              </div>
              <div>
                <Link to={'/'} className='block hover:-translate-y-1 hover:scale-110 hover:text-white transition-transform duration-500'>Pricing</Link>
              </div>
              <div>
                <Link to={'/'} className='block hover:-translate-y-1 hover:scale-110 hover:text-white transition-transform duration-500'>Careers</Link>
              </div>
              <div>
                <Link to={'/'} className='block hover:-translate-y-1 hover:scale-110 hover:text-white transition-transform duration-500'>Blog</Link>
              </div>
            </div>
          </div>

          <div className=''>
            <h1 className='text-xl text-white'>Services</h1>
            <div className='flex flex-col mt-3 gap-y-3 text-gray-400'>
              <div>
                <Link to={'/'} className='block hover:-translate-y-1 hover:scale-110 hover:text-white transition-transform duration-500'>Contact</Link>
              </div>
              <div>
                <Link to={'/'} className='block hover:-translate-y-1 hover:scale-110 hover:text-white transition-transform duration-500'>FAQ</Link>
              </div>
              <div>
                <Link to={'/'} className='block hover:-translate-y-1 hover:scale-110 hover:text-white transition-transform duration-500'>Terms</Link>
              </div>
              <div>
                <Link to={'/'} className='block hover:-translate-y-1 hover:scale-110 hover:text-white transition-transform duration-500'>Privacy</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='lg:my-14 mx-14 justify-center items-center lg:p-10'>
          <div className='flex flex-col justify-center items-center '>
            <p className='text-white text-sm'>SUBSCRIBE TO NEWSLETTER</p>
            <p className='text-gray-500 text-xs mt-1'>To receive latest works and upcoming projects</p>
          </div>

          <form>
            <div className="join mt-4 lg:mt-6">
              <input className="input join-item" placeholder="Email" />
              <button className="btn join-item rounded-r-full bg-blue-950 hover:text-black text-white">Subscribe</button>
            </div>
          </form>
        </div>

      </div>


    </>
  )
}

export default Footer