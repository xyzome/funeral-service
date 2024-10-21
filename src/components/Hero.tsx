import ambulance from '../images/hero-ambulance.jpeg'
import Typewriter from 'typewriter-effect';
import CountUp from 'react-countup';


function Hero() {
  return (
    <>
       
      <section className="text-gray-600 body-font" data-aos="fade-up">
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
            <section className="text-gray-600 body-font" data-aos="fade-left">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-semibold sm:text-3xl text-xl ">
                <CountUp start={920} end={1000} duration={15} />+
                </h2>
              <p className="leading-relaxed text-gray-900">Clients Served</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-semibold sm:text-3xl text-xl">
                      <CountUp start={350} end={365} duration={15} />+
              </h2>
              <p className="leading-relaxed text-gray-900">Emergency Cases Handled</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-semibold sm:text-3xl text-xl">
                      <CountUp start={0} end={10} duration={15} />+
              </h2>
              <p className="leading-relaxed text-gray-900">Ambulances Available</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-semibold sm:text-3xl text-xl">
                      <CountUp start={0} end={9} duration={15} />+
              </h2>
              <p className="leading-relaxed text-gray-900">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>
      {/* End of Statistics Section */}
      <div className="flex justify-center">
              <a href="tel:+919920963000">
                <svg height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.999 511.999" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path style={{ fill: '#FF6400' }} d="M342.315,337.711l-25.981,25.977c-2.223-1.212-4.625-2.415-7.048-3.777 c-22.302-12.368-66.331-42.73-98.447-74.846c-32.186-32.195-62.665-76.239-75.022-98.541c-1.332-2.344-1.876-3.877-3.088-6.071 l24.371-22.904l2.525-2.525c19.309-19.309,19.309-50.613,0-69.923l-38.077-38.076c-19.416-19.416-50.935-19.291-70.197,0.278 l-10.149,10.31c-6.61,8.452-12.216,18.284-16.321,28.768c-3.795,10.015-6.223,19.601-7.274,29.146 c-9.274,76.667,25.755,146.747,120.809,241.84c131.435,131.395,236.67,122.286,241.246,121.774 c9.934-1.172,20.155-4.323,29.86-8.077c10.405-4.066,20.321-9.756,28.733-16.366l10.315-10.142 c19.587-19.259,19.719-50.793,0.295-70.216l-36.63-36.63C392.927,318.405,361.624,318.405,342.315,337.711z" /> <g> <path style={{ fill: '#211E48' }} d="M372.047,495.597c-0.003,0-0.005,0-0.006,0c-27.727,0-127.338-9.149-245.036-126.81 C28.013,269.755-8.332,195.837,1.571,113.681c1.196-10.789,3.884-21.59,8.218-33.02c0.021-0.053,0.042-0.108,0.063-0.163 c4.615-11.79,11.061-23.141,18.636-32.83c0.378-0.483,0.781-0.943,1.211-1.379l10.149-10.31 c12.426-12.625,29.025-19.577,46.741-19.577c17.519,0,33.987,6.822,46.374,19.207l38.076,38.077 c12.386,12.387,19.209,28.857,19.209,46.375s-6.822,33.987-19.209,46.375l-2.526,2.525c-0.118,0.116-0.236,0.234-0.357,0.347 l-15.335,14.412c12.583,21.277,39.75,60.234,69.435,89.929c30.105,30.105,70.192,57.821,91.219,70.069l17.427-17.425 c12.387-12.386,28.856-19.206,46.373-19.206c17.519,0,33.987,6.822,46.374,19.207l36.631,36.63 c12.462,12.463,19.283,29.03,19.207,46.654c-0.074,17.621-7.036,34.131-19.601,46.486l-10.315,10.14 c-0.426,0.42-0.875,0.814-1.345,1.183c-9.737,7.65-21.09,14.119-32.831,18.709c-12.728,4.925-23.782,7.887-33.843,9.073 C380.589,495.282,377.361,495.597,372.047,495.597z M39.945,92.186c-3.348,8.847-5.406,17.062-6.292,25.111 c-0.006,0.057-0.013,0.113-0.019,0.169c-8.602,71.12,25.064,137.317,116.2,228.494 c108.922,108.886,197.619,117.353,222.208,117.353c0.002,0,0.003,0,0.005,0c3.81,0,5.814-0.21,5.834-0.211 c7.222-0.852,15.701-3.175,25.816-7.09c8.513-3.327,16.776-7.982,23.906-13.477l9.65-9.487c6.381-6.274,9.914-14.655,9.953-23.603 c0.039-8.949-3.425-17.361-9.753-23.688l-36.63-36.63c-6.289-6.289-14.652-9.753-23.546-9.753c-8.894,0-17.256,3.464-23.545,9.751 l-25.981,25.977c-5.062,5.065-12.854,6.184-19.14,2.759c-0.846-0.462-1.719-0.92-2.61-1.388c-1.508-0.794-3.059-1.613-4.618-2.489 c-22.018-12.21-67.425-42.977-101.953-77.504c-34.51-34.521-65.944-80.886-77.69-102.065c-0.969-1.711-1.63-3.098-2.165-4.216 c-0.294-0.615-0.578-1.228-0.972-1.939c-3.567-6.458-2.303-14.515,3.073-19.569l24.187-22.734l2.349-2.347 c6.287-6.289,9.751-14.651,9.751-23.545c0-8.896-3.464-17.256-9.753-23.546l-38.077-38.077c-6.289-6.289-14.651-9.753-23.545-9.753 c-8.994,0-17.424,3.53-23.734,9.939l-9.477,9.627C47.955,75.333,43.321,83.587,39.945,92.186z" /> <path style={{ fill: '#211E48' }} d="M403.287,258.505c-4.376,0-8.775-1.022-12.856-3.091c-9.548-4.843-15.492-14.484-15.535-25.183 h-78.273c-24.305,0-44.077-19.772-44.077-44.077v-29.729c0-24.305,19.774-44.077,44.077-44.077h10.444 c8.915,0,16.142,7.228,16.142,16.142c0,8.914-7.227,16.142-16.142,16.142h-10.444c-6.504,0-11.793,5.29-11.793,11.793v29.729 c0,6.502,5.29,11.793,11.793,11.793h94.415c8.915,0,16.142,7.228,16.142,16.142v8.307l69.821-51.104l-69.821-51.106v8.305 c0,8.914-7.227,16.142-16.142,16.142H364.94c-8.915,0-16.142-7.228-16.142-16.142s7.227-16.142,16.142-16.142h9.956 c0.042-10.697,5.987-20.339,15.535-25.183c9.584-4.862,20.922-3.935,29.59,2.408l80.365,58.823 c7.272,5.324,11.614,13.882,11.613,22.894c-0.002,9.012-4.342,17.569-11.614,22.891l-80.365,58.822 C415.045,256.647,409.187,258.505,403.287,258.505z" /> </g> </g></svg>

               
        </a>
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
