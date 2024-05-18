import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules"
import 'swiper/css';
import "swiper/css/navigation"
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { ReactTyped } from 'react-typed';
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.jpg'
import img7 from '../assets/images/img7.jpg'
import img8 from '../assets/images/img8.jpg'
import img9 from '../assets/images/img9.jpg'
import img10 from '../assets/images/img10.jpg'
import { TbMail } from 'react-icons/tb';
import { sendMessage } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {
  const [inputs, setInputs] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = { ...inputs };
      const res = await sendMessage(data)


      toast.success('Message sent')
    } catch (error) {
      toast.error('Failed')
    }
    e.target.reset()
  }


  return (
    <div>
      {/* Hero Section */}
      <div className="lg:h-screen xl:h-[50%] m-4 flex justify-center items-center">
        <div>
          <div className={`w-full h-[300px] lg:h-[540px] bg-cover bg-center flex flex-col justify-center items-center `} style={{ backgroundImage: `url('https://img.freepik.com/free-vector/white-abstract-background_23-2148809724.jpg?t=st=1713023232~exp=1713026832~hmac=fb6d6c0143e30ae2288534b0c4dec66065842a42ec7f3881b04496b4de4de5e3&w=740')` }}>
            <p className='text-xl text-blue-400'>Worlds Number One in</p>
            <ReactTyped className='text-3xl lg:text-6xl font-bold text-blue-950' strings={["Web Development", "ISCOFINTECH"]} typeSpeed={100} backSpeed={100} loop></ReactTyped>
            <p className='text-sm lg:text-xl'>To provide an informative, user-friendly and effective</p>
            <p className='text-sm lg:text-xl'>Apps or Websites to provide companies with the message</p>
            <p className='text-sm lg:text-xl'>or goal they are hoping to accomplish</p>
          </div>
        </div>

      </div>

      {/* Body */}
      <div className=''>
        <div className='m-2 lg:m-4 flex justify-between p-2 lg:p-10'>
          <div className='p-2 lg:p-10'>
            <img className='w-[200px] lg:w-[500px] h-32 lg:h-72' src={'https://images.pexels.com/photos/5668886/pexels-photo-5668886.jpeg?auto=compress&cs=tinysrgb&w=600'} />
          </div>
          <div className='p-2 lg:p-10 text-sm lg:text-lg text-blue-950'>
            <p>Manage your entire logistics process with a simple-to- <br />use tech platform that gives you real-time visibility and <br /> creates an effective value chain for all stakeholders in <br /> the supply chain.</p>
            <br />
            <p className='hidden lg:flex'>With our seamless mobile and web applications, <br /> Kobo360 innovates products and solutions that are <br />robust and caters for all stakeholders in the supply chain<br /> network using big data and technology to reduce supply <br /> chain risks, logistics bottlenecks, manufacturing waste, <br />low turn-around and loss of goods.</p>
          </div>
        </div>
      </div>

      <div className={`w-full h-[600px] lg:h-[540px] bg-cover bg-center flex flex-col justify-center items-center lg:p-12`} style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/abstract-background-white-matt-square-bars-white-background-3d-illustration_357568-783.jpg?w=996')` }}>
        <div className='flex flex-col lg:flex-row gap-16 lg:gap-24 lg:mx-28'>
          <div className='w-[350px] lg:w-[400px] lg:h-[300px] border-x-2 rounded-3xl bg-blue-400'>
            <p className='flex items-center mt-4 lg:mt-6 ml-6 lg:ml-8 text-2xl lg:text-4xl text-white font-semibold'>VISION</p>
            <p className='p-3 lg:p-4 text-sm lg:text-base text-blue-950 font-medium'>TO provide an informative, user-friendly and effective Apps or Websites to provide companies with the message or goal they are hoping to accomplish.</p>
          </div>

          <div className='w-[350px] lg:w-[400px] lg:h-[300px] border-x-2 rounded-3xl bg-blue-400'>
            <p className='flex items-center mt-4 lg:mt-6 ml-6 lg:ml-8 text-2xl lg:text-4xl text-white font-semibold'>MISSION</p>
            <p className='p-3 lg:p-4 text-sm lg:text-base text-blue-950 font-medium'>To empower businesses of all sizes with cutting-edge, secure, optimal user experience, web design and Apps that drive growth and success. We are committed to delivering exceptional services that exceed our clients' expectations and contribute to their long-term success.</p>
          </div>

        </div>
      </div>

      <div style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/black-board-texture-background_157125-18189.jpg?w=740')` }}>
        <Swiper
          loop={true}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{
            delay: 4000
          }}
          className='lg:w-[700px] px-16 py-8 lg:p-20 lg:pb-0'
        >
          <SwiperSlide>
            <img src={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img10} />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Contact Us */}
      <form className='bg-gray-100 py-20' onSubmit={handleSubmit}>
        <div>
          <h1 className='flex justify-center text-4xl font-bold text-gray-700'>Contact us</h1>
          <p className='flex justify-center text-gray-500'>We'll be glad to answer all your questions.</p>
        </div>

        <div className='flex flex-col lg:flex-row justify-between items-center gap-6 mt-10 mx-14'>
          <div className='shadow-xl'>
            <p className='text-sm px-3 pb-1'>YOUR NAME</p>
            <input type='text'
              onChange={(e) => inputs.name = e.target.value}
              placeholder='Enter your name'
              className='p-3 w-96 outline-none'
            />
          </div>
          <div className='shadow-xl'>
            <p className='text-sm px-3 pb-1'>EMAIL ADDRESS</p>
            <input type='text'
              onChange={(e) => inputs.email = e.target.value}
              placeholder='example@example.com'
              className='p-3 w-96 outline-none'
            />
          </div>
          <div className='shadow-xl'>
            <p className='text-sm px-3 pb-1'>SUBJECT</p>
            <input type='text'
              onChange={(e) => inputs.subject = e.target.value}
              placeholder='Title of your message'
              className='p-3 w-96 outline-none'
            />
          </div>
        </div>

        <div className='flex justify-center mt-12'>
          <div>
            <p>Message</p>
            <textarea
              onChange={(e) => inputs.message = e.target.value}
              placeholder='Type your message...'
              className='w-96 lg:w-[1200px] h-36 p-4 outline-none shadow-xl'
            />
          </div>
        </div>

        <div className='flex justify-center mt-8'>
          <button type='submit' className='flex items-center gap-2 bg-blue-950 rounded-full py-2 px-4 text-white text-sm '>
            <TbMail className='w-6 h-6 p-1 bg-white rounded-full text-blue-700 animate-pulse' />
            SEND MESSAGE</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Hero