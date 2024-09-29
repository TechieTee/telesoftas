import React from 'react'

const Stacks = () => {
  return (
    <div className='lg:px-24 lg:py-16 md:px-24 md:py-16 px-[10px] py-[20px] grid gap-24 '>
      <div className=" grid items-center justify-center lg:grid-cols-2 gap-8 md:grid-cols-1 sm:grid-cols-1">

        <div className="group relative">
          <div className="ml-6 font-black text-[2rem] mb-6 inline-block text-[#151621] relative transition-[padding] duration-200 ease-out">
          Web Development
          </div>
          <div className="font-black absolute text-[4.6rem] text-[#f3f5f7] -top-9 left-0 z-[-1]">
            01
          </div>
          <h4 className="ml-6 text-[#595959] text-[18px] lg:w-2/3 font-normal  leading-[27px] pb-4">
          Building feature-rich, responsive web applications using the latest technologies.
          </h4>
          <button className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-6 text-[12px] text-[1rem] py-2 px-4 bg-black text-white" >
            Read More
          </button>
        </div>

        <div className="group relative">
          <div className="ml-6 font-black text-[2rem] mb-6 inline-block text-[#151621] relative transition-[padding] duration-200 ease-out">
          Mobile Development
          </div>
          <div className="font-black absolute text-[4.6rem] text-[#f3f5f7] -top-9 left-0 z-[-1]">
            02
          </div>
          <h4 className="ml-6 text-[#595959] text-[18px] lg:w-2/3 font-normal  leading-[27px] pb-4">Creating engaging, user-friendly mobile apps for iOS and Android platforms.</h4>
          <button className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-6 text-[12px] text-[1rem] py-2 px-4 bg-black text-white" >
            Read More
          </button>
        </div>
      </div>

      <div className=" grid items-center  lg:grid-cols-2  md:grid-cols-1 gap-8 sm:grid-cols-1">

<div className="group relative">
  <div className="ml-6 font-black text-[2rem] mb-6 inline-block text-[#151621] relative transition-[padding] duration-200 ease-out">
  Cloud Solutions
  </div>
  <div className="font-black absolute text-[4.6rem] text-[#f3f5f7] -top-9 left-0 z-[-1]">
    03
  </div>
  <h4 className="ml-6 text-[#595959] text-[18px] lg:w-2/3 font-normal  leading-[27px] pb-4">Leveraging cloud infrastructure to build scalable, secure, and cost-effective applications.</h4>
  <button className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-6 text-[12px] text-[1rem] py-2 px-4 bg-black text-white" >
    Read More
  </button>
</div>

<div className="group relative">
  <div className="ml-6 font-black text-[2rem] mb-6 inline-block text-[#151621] relative transition-[padding] duration-200 ease-out">
  Artificial Intelligence
  </div>
  <div className="font-black absolute text-[4.6rem] text-[#f3f5f7] -top-9 left-0 z-[-1]">
    04
  </div>
  <h4 className="ml-6 text-[#595959] text-[18px] lg:w-2/3 font-normal  leading-[27px] pb-4">Harnessing the power of Al to create intelligent solutions that solve complex business problems.</h4>
  <button className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-6 text-[12px] text-[1rem] py-2 px-4 bg-black text-white" >
    Read More
  </button>
</div>
</div>


<div className=" grid items-center  lg:grid-cols-2  md:grid-cols-1  gap-8 sm:grid-cols-1">

<div className="group relative">
  <div className="ml-6 font-black text-[2rem] mb-6 inline-block text-[#151621] relative transition-[padding] duration-200 ease-out">
  Digital Transformation
  </div>
  <div className="font-black absolute text-[4.6rem] text-[#f3f5f7] -top-9 left-0 z-[-1]">
    05
  </div>
  <h4 className="ml-6 text-[#595959] text-[18px] lg:w-2/3 lg:w-2/3 font-normal  leading-[27px] pb-4">Helping businesses modernise their processes and systems to stay competitive in the digital age.</h4>
  <button className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-6 text-[12px] text-[1rem] py-2 px-4 bg-black text-white" >
    Read More
  </button>
</div>


<div className="group relative">
  <div className="ml-6 font-black text-[2rem] mb-6 inline-block text-[#151621] relative transition-[padding] duration-200 ease-out">
  Data Management
  </div>
  <div className="font-black absolute text-[4.6rem] text-[#f3f5f7] -top-9 left-0 z-[-1]">
    06
  </div>
  <h4 className="ml-6 text-[#595959] text-[18px] lg:w-2/3 font-normal  leading-[27px] pb-4">Data Management: Implementing robust data strategies to ensure efficient storage, retrieval, and analysis of data.</h4>
  <button className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-6 text-[12px] text-[1rem] py-2 px-4 bg-black text-white" >
    Read More
  </button>
</div>
</div>

    </div>

  )
}

export default Stacks