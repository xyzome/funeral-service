import { Carousel } from "flowbite-react";
import '../App.css'
import img4 from '../images/4.jpg'
import img1 from '../images/1.jpg'
import img12 from '../images/12.jpg'
function Hero() {
  return (
    <div className="h-64 sm:h-80 xl:h-96 2xl:h-[30rem]">
      <Carousel slide={true} slideInterval={1000}>
        {/* Slide 1 */}
        <div className="relative">
          <img
            src={img4}
            alt="Shanti by Antim Yatra"
            className="h-full w-full object-cover transform transition-transform duration-[2000ms] scale-100 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center text-left text-white p-8 sm:p-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 opacity-0 animate-fadeInUp">
              Shah Funeral Service
            </h2>
            <p className="text-sm sm:text-base mb-4 opacity-0 animate-fadeInUp delay-150">
              Funeral Service | Cremation Ground Service | Funeral Flowers | Freezer Box
            </p>
            <a
              href="tel:+ 9920963000"
              className="mt-2 px-4 py-2 text-center bg-[#FF6400] text-white font-semibold rounded-full w-32 hover:bg-[#e55c00] hover:scale-105 shadow-lg transition-all duration-300 ease-in-out sm:w-36 md:w-40 lg:w-48 opacity-0 animate-fadeInUp delay-300"
            >
              Call Us Now
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src={img12}
            alt="Shanti by Antim Yatra"
            className="h-full w-full object-cover transform transition-transform duration-[2000ms] scale-100 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center text-left text-white p-8 sm:p-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 opacity-0 animate-fadeInUp">
              Shah Funeral Service
            </h2>
            <p className="text-sm sm:text-base mb-4 opacity-0 animate-fadeInUp delay-150">
              Cremation Ground Services | Personalized Farewells
            </p>
            <a
              href="tel:+ 9920963000"
              className="mt-2 px-4 py-2 text-center bg-[#FF6400] text-white font-semibold rounded-full w-32 hover:bg-[#e55c00] hover:scale-105 shadow-lg transition-all duration-300 ease-in-out sm:w-36 md:w-40 lg:w-48 opacity-0 animate-fadeInUp delay-300"
            >
              Call Us Now
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            src={img1}
            alt="Shanti by Antim Yatra"
            className="h-full w-full object-cover transform transition-transform duration-[2000ms] scale-100 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center text-left text-white p-8 sm:p-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 opacity-0 animate-fadeInUp">
              Shah Funeral Service
            </h2>
            <p className="text-sm sm:text-base mb-4 opacity-0 animate-fadeInUp delay-150">
              Panditjee for Puja | Air Body Transportation | Embalming Services | Pet Cremations
            </p>
            <a
              href="tel:+ 9920963000"
              className="mt-2 px-4 py-2 text-center bg-[#FF6400] text-white font-semibold rounded-full w-32 hover:bg-[#e55c00] hover:scale-105 shadow-lg transition-all duration-300 ease-in-out sm:w-36 md:w-40 lg:w-48 opacity-0 animate-fadeInUp delay-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Hero;
