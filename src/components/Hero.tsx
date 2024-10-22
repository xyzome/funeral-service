import img14 from '../images/img14.jpg'
function Hero() {
  return (
    <>
          <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                          Cremation & Funeral Services At ShahFuneralService 
                      </h1>
                      <p className="mb-8 leading-relaxed">
                          We take care of all aspects of a funeral ceremony from the hearse, to the cremation, to the freezer coffins. We plan beautiful floral tributes for the funeral.
                          <br /><br />
                          Contact us for a personalized funeral for a loved one. Give your family or friend peace of mind, as we are there to plan and help. We ensure that arranging for a funeral is the last of your worries. We handle all the requisites to perform a loved one's last rites.
                          <br /><br />
                          Our dedicated team of professionals is available round the clock to help you through this difficult time.
                      </p>
                      <div className="flex justify-center">
                          <a
                              href="/"
                              className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
                          >
                              View More
                          </a>
                      </div>
                  </div>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                      <img className="object-cover object-center rounded-3xl hover:scale-110" alt="hero" src={img14}/>
                  </div>
              </div>
          </section>


    </>
  )
}

export default Hero
