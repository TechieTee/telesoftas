import { Image } from "../assets/index";
const WhyUs = () => {
  return (

    <div className="lg:px-24 lg:py-16 md:px-24 md:py-16 px-[20px] py-[20px] bg-black grid gap-8" >
      <h2 className="text-white  text-3xl text-center lg:text-5xl  font-bold leading-normal">
      Why Choose TeleSoftas?
                  </h2>
      <h4 className="text-white text-center font-normal leading-loose">
        When you partner with TeleSoftas, you gain access to a wealth of knowledge and experience<br/>
        in cutting-edge technologies. But that s not all our dedicated teams offer a unique<br/>
        combination of advantages that set us apart
      </h4>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 items-center justify-between gap-4 mt-10">
        <div className="grid gap-2 items-center h-full shadow-sm p-6 bg-white rounded-[8px]">
        <div className="flex justify-center items-center mt-[-80px]">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 p-1">
        <div className="w-full h-full bg-white rounded-full"></div>
      </div>
    </div> <p className="text-[#404040] text-[26px] font-bold text-center leading-[35px]">Flexibility to Build
            for Any Industry</p>
          <div className="text-[#595959] lg:mb-0 md:mb-0 mb-8 text-[16px] text-center leading-[30px]" >
          We offer tailored solutions across various industries, including finance healthcare and e-commerce. to meet your business needs and drive success
          </div>
        </div>
        <div className="grid gap-2 items-center h-full shadow-sm p-6 bg-white rounded-[8px]">
        <div className="flex justify-center items-center mt-[-80px]">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 p-1">
        <div className="w-full h-full bg-white rounded-full"></div>
      </div>
    </div> <p className="text-[#404040] text-[26px] font-bold text-center leading-[35px]">Time Zone Advantage</p>
          <div className="text-[#595959] lg:mb-0 md:mb-0 mb-8 text-[16px] text-center leading-[30px]" >
          Based in Tallinn. Estonia. we efficiently collaborate with clients across time zones, ensuring your project stays on track.
          </div>
        </div>
        <div className="grid gap-2 items-center h-full shadow-sm p-6 bg-white rounded-[8px]">
        <div className="flex justify-center items-center mt-[-80px]">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 p-1">
        <div className="w-full h-full bg-white rounded-full"></div>
      </div>
    </div> <p className="text-[#404040] text-[26px] font-bold text-center leading-[35px]">
          Excellent English Communication Skills</p>
          <div className="text-[#595959] lg:mb-0 md:mb-0 mb-8 text-[16px] text-center leading-[30px]" >
          Our English-fluent team ensures clear communication. understanding vour neeas and providing timely updates throughout development.
           </div>
        </div>

      

        <div className="grid gap-2 items-center h-full shadow-sm p-6 bg-white rounded-[8px]">
        <div className="flex justify-center items-center mt-[-80px]">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 p-1">
        <div className="w-full h-full bg-white rounded-full"></div>
      </div>
    </div>
          <p className="text-[#404040] text-[26px] font-bold text-center leading-[35px]">
          Cost-Effective Solutions</p>
          <div className="text-[#595959] lg:mb-0 md:mb-0 mb-8 text-[16px] text-center leading-[30px]" >
          We provide cost-effective solutions with competitive pricing and  quality, ensuring great rol. contact us to elevate vour development process today.</div>
        </div> 
      </div>
      <p className="text-center mt-24 mb-12 text-white text-[26px] font-bold">TeleSoftas is trusted by Global Brands</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-1 self-center">
        <img src={Image.partner1}  alt="logo"  className="logo grayscale hover:grayscale-0 transition duration-300 ease-in-out"/> 
        </div>
        <div className=" col-span-1 self-center  ">
        <img src={Image.partner2}  alt="logo"  className="logo grayscale hover:grayscale-0 transition duration-300 ease-in-out"/> 
       
        </div>

        <div className="col-span-1 self-center  ">
        <img src={Image.partner3}  alt="logo"  className="logo grayscale hover:grayscale-0 transition duration-300 ease-in-out"/> 
       
        </div>
        <div className=" col-span-1 self-center  ">
        <img src={Image.partner4}  alt="logo"  className="logo grayscale hover:grayscale-0 transition duration-300 ease-in-out"/> 
       
        </div>

        <div className="col-span-1 self-center   ">
        <img src={Image.partner5}  alt="logo"  className="logo grayscale hover:grayscale-0 transition duration-300 ease-in-out"/> 
       
        </div>

        <div className="col-span-1 self-center ">
        <img src={Image.partner6}  alt="logo"  className="logo grayscale hover:grayscale-0 transition duration-300 ease-in-out"/> 
       
        </div>

        <div className="col-span-1 self-center ">
        <img src={Image.partner7}  alt="logo"  className="logo grayscale hover:grayscale-0 transition duration-300 ease-in-out"/> 
       
        </div>

        <div className="col-span-1 self-center   ">
        <img src={Image.partner8}  alt="logo"  className="logo grayscale hover:grayscale-0 transition duration-300 ease-in-out"/> 
       
        </div>

      </div>

    </div>

  );
};

export default WhyUs;
