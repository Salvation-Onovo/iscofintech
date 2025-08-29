import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <>
      <div className="w-full h-screen">
        <NavBar />
        <div className="lg:h-screen xl:h-[100%] mt-28 m-4 flex justify-center items-center"> 
          <div
            className={`h-screen w-full bg-cover bg-center`}
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&w=600')`,
            }}
          >
            <p></p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Services
