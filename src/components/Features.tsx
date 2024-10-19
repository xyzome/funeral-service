
function Features() {
  return (
    <>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-10">
                      Fast, Reliable, and Life-Saving Ambulance Services
                  </h1>

    {/* Service 1 */}
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">24/7 Emergency Service</h2>
        <p className="leading-relaxed text-base">Our dedicated team is available 24/7 for all emergency cases, ensuring timely medical assistance when you need it the most.</p>
       
      </div>
    </div>
    {/* Service 2 */}
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Advanced Life Support Ambulances</h2>
        <p className="leading-relaxed text-base">Equipped with advanced medical technology and skilled paramedics, our ambulances ensure the highest level of care during transport.</p>
       
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <circle cx={6} cy={6} r={3} />
          <circle cx={6} cy={18} r={3} />
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
        </svg>
      </div>
    </div>
    {/* Service 3 */}
    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx={12} cy={7} r={4} />
        </svg>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Non-Emergency Medical Transport</h2>
        <p className="leading-relaxed text-base">We also provide reliable non-emergency transport services, including hospital transfers and doctor appointments.</p>
        
      </div>
    </div>

  </div>
</section>


    </>
  )
}

export default Features
