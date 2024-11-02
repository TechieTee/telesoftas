import React from 'react'

const Stacks = () => {
  return (
    <div className='bg-white mx-auto lg:px-24 lg:pl-[200px] lg:py-16 md:px-24 md:py-16 px-[10px] py-[50px] grid  lg:gap-24 gap-14 '>
      <div className=" grid items-center justify-center lg:grid-cols-2 lg:gap-8 md:grid-cols-1 gap-12 sm:grid-cols-1">

        <div className="group relative lg:mt-4 md:mt-4 mt-8">
          <div className="ml-6 font-black text-[24px] mb-6 inline-block text-[#151621] relative transition-[padding] duration-200 ease-out">
          Web Development
          </div>
          <div className="font-black absolute text-[4.6rem] text-[#d7e0f2] -top-9 left-0 z-[-1]">
            01
          </div>
          <h4 className="ml-6 text-[#595959] text-[18px] lg:w-2/3 font-normal  leading-[27px] pb-4">
          Building feature-rich, responsive web applications using the latest technologies.
          </h4>
          <a href="https://calendly.com/telesoftas-nigeria" target="_blank">
          <button className=" mb-4 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-6 text-[12px] text-[1rem] py-2 px-4 bg-black text-white" >
            Read More
          </button></a>
        </div>

        <div className="group relative lg:mt-4 md:mt-4 mt-8">
          <div className="ml-6 font-black text-[24px] mb-6 inline-block text-[#151621] relative transition-[padding] duration-200 ease-out">
          Mobile Development
          </div>
          <div className="font-black absolute text-[4.6rem] text-[#d7e0f2] -top-9 left-0 z-[-1]">
            02
          </div>
          <h4 className="ml-6 text-[#595959] text-[18px] lg:w-2/3 font-normal  leading-[27px] pb-4">Creating engaging, user-friendly mobile apps for iOS and Android platforms.</h4>
          <a href="https://calendly.com/telesoftas-nigeria" target="_blank">
          <button className=" mb-4 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-6 text-[12px] text-[1rem] py-2 px-4 bg-black text-white" >
            Read More
          </button></a>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-between gap-4 mt-10">
        <div className="grid gap-2 items-center h-full shadow-sm p-6 bg-white rounded-[8px]">
        <div className="flex justify-center items-center mt-[-80px]">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 p-1">
        <div className="w-full h-full bg-white rounded-full"></div>
      </div>
    </div> <p className="text-[#404040] text-[24px] font-bold text-center leading-[35px]">Flexibility to Build
            for Any Industry</p>
          <div className="text-[#595959] lg:mb-0 md:mb-0 mb-8 text-[14px] text-center leading-[30px]" >
          We offer tailored solutions across various industries, including finance healthcare and e-commerce. to meet your business needs and drive success
          </div>
        </div>
        <div className="grid gap-2 items-center h-full shadow-sm p-6 bg-white rounded-[8px]">
        <div className="flex justify-center items-center mt-[-80px]">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 p-1">
        <div className="w-full h-full bg-white rounded-full"></div>
      </div>
    </div> <p className="text-[#404040] text-[24px] font-bold text-center leading-[35px]">Time Zone Advantage</p>
          <div className="text-[#595959] lg:mb-0 md:mb-0 mb-8 text-[14px] text-center leading-[30px]" >
          Based in Tallinn. Estonia. we efficiently collaborate with clients across time zones, ensuring your project stays on track.
          </div>
        </div>
        <div className="grid gap-2 items-center h-full shadow-sm p-6 bg-white rounded-[8px]">
        <div className="flex justify-center items-center mt-[-80px]">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 p-1">
        <div className="w-full h-full bg-white rounded-full"></div>
      </div>
    </div> <p className="text-[#404040] text-[24px] font-bold text-center leading-[35px]">
          Excellent English Communication Skills</p>
          <div className="text-[#595959] lg:mb-0 md:mb-0 mb-8 text-[14px] text-center leading-[30px]" >
          Our English-fluent team ensures clear communication. understanding vour neeas and providing timely updates throughout development.
           </div>
        </div>

      

       
      </div>

    </div>

  )
}

export default Stacks