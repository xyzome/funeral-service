import ambulance from '../images/hero-ambulance.jpeg'
import Typewriter from 'typewriter-effect';

function Hero() {
  return (
    <>
        {/* HERO SECTION */}
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
     
      <h1 id="typewriter-text" className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" > 
                          <Typewriter
                              options={{
                                  strings: ["Fast and Reliable Ambulance Services", "24/7 Emergency Assistance", "Experienced Medical Team"],
                                  autoStart: true,
                                  delay: 50,
                                  loop: true,
                              }}
                          />
                          </h1>
      <p className="mb-8 leading-relaxed text-lg text-gray-700">Providing compassionate and timely medical transport
        for emergency and
        non-emergency situations. Our fleet of well-equipped ambulances is available 24/7, ensuring you get
        the care you need when you need it the most.</p>
      {/* Statistics Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-semibold sm:text-3xl text-xl ">2k+</h2>
              <p className="leading-relaxed text-gray-900">Clients Served</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-semibold sm:text-3xl text-xl">1k+</h2>
              <p className="leading-relaxed text-gray-900">Emergency Cases Handled</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-semibold sm:text-3xl text-xl">10+</h2>
              <p className="leading-relaxed text-gray-900">Ambulances Available</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-semibold sm:text-3xl text-xl">10</h2>
              <p className="leading-relaxed text-gray-900">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>
      {/* End of Statistics Section */}
      <div className="flex justify-center">
        <a href="tel:+919619400500">
          <button className="bg-indigo-500 text-white py-3 px-8 flex items-center justify-center space-x-2 rounded-lg transition-transform transform hover:-translate-y-1 hover:bg-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l2 7h10l2-7h2M16 13v4H8v-4H5v7h14v-7h-3z" />
            </svg>
            <span>Call Us</span>
          </button>
        </a>
        {/* <button
                        class="ml-4 bg-gray-100 text-gray-700 py-3 px-8 rounded-lg transition-transform transform hover:-translate-y-1 hover:bg-gray-200">Learn
                        More</button> */}
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                      <img className="object-cover object-center rounded-lg " alt="ambulance-image" src={ambulance} />
    </div>
  </div>
</section>

    </>
  )
}

export default Hero
