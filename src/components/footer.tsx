
import { Link } from "react-router-dom";
import { Image } from "../assets/index";

const Footer = () => {
  return (
    <>
      <div className="bg-white lg:px-36 lg:py-16 md:px-24 md:py-16 px-[20px] py-[20px] w-full">
        <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
          <div className="grid lg:grid-cols-1 ">
          <img src={Image.Logo4} width={170} alt="logo"/> 

            <p className="text-[#595959] text-[14px] font-normal  mt-2 lg:w-3/5 leading-[28px]">
              TeleSoftas Nigeria is a digital product engineering and
              consulting services company. We are a part of <span className="font-bold">Helmes
              group,</span> uniting over 1500 IT specialists in the Baltics.
            </p>
            <p className="">
     text here to edit!
          </p>
           
          </div>
          <div className="grid gap-6 lg:grid-cols-3 ">


            <div className="grid-cols-1">

            <div className="col-span-1 p-2 md: ">
                <h2 className=" text-[1px] md:text-[18px] leading-6 md:leading-[28.64px]">
                  Company
                </h2>

                <div className="text-[#BEBEBE] text-[12px]">
                  <p className=" leading-5 text-left py-1 md:py-2">
                    <Link to="/about">About</Link>
                  </p>
                  <div className=" leading-5 text-left  flex items-center">
                    <p className="mr-2">
                      <Link to="/career">Careers</Link>
                    </p>
                    <button className="italic bg-[#038B45] text-nowrap text-white py-1 px-2 md:px-3 lg:text-[0.6rem] md:text-[0.7] sm:text-[0.4rem] rounded-2xl">
                      We are Hiring!
                    </button>
                  </div>
                  <p className=" leading-5 text-left py-1 md:py-2 text-[#BEBEBE]">
                    <a href="/contact-us">Help</a>
                  </p>
                  <p className=" leading-5 text-left py-1 md:py-2">
                    <a href="/presscorner">Press Corner</a>
                  </p>
                  <p className=" leading-5 text-left py-1 md:py-2">
                    <a href="/software-development">Software Development</a>
                  </p>
                </div>
              </div>

            </div>

            <div className="grid-cols-1">
            <div className="col-span-1 p-2 md: ">
                <h2 className=" text-[1px] md:text-[18px] leading-6 md:leading-[28.64px]">
                  Company
                </h2>

                <div className="text-[#BEBEBE] text-[12px]">
                  <p className=" leading-5 text-left py-1 md:py-2">
                    <Link to="/about">About</Link>
                  </p>
                  <div className=" leading-5 text-left  flex items-center">
                    <p className="mr-2">
                      <Link to="/career">Careers</Link>
                    </p>
                  
                  </div>
                  <p className=" leading-5 text-left py-1 md:py-2 text-[#BEBEBE]">
                    <a href="/contact-us">Help</a>
                  </p>
                  <p className=" leading-5 text-left py-1 md:py-2">
                    <a href="/presscorner">Press Corner</a>
                  </p>
                  <p className=" leading-5 text-left py-1 md:py-2">
                    <a href="/software-development">Software Development</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-cols-1">

            <div className="col-span-1 p-2 md: ">
                <h2 className=" text-[1px] md:text-[18px] leading-6 md:leading-[28.64px]">
                  Company
                </h2>

                <div className="text-[#BEBEBE] text-[12px]">
                  <p className=" leading-5 text-left py-1 md:py-2">
                    <Link to="/about">About</Link>
                  </p>
                  <div className=" leading-5 text-left  flex items-center">
                    <p className="mr-2">
                      <Link to="/career">Careers</Link>
                    </p>
                 
                  </div>
                  <p className=" leading-5 text-left py-1 md:py-2 text-[#BEBEBE]">
                    <a href="/contact-us">Help</a>
                  </p>
                  <p className=" leading-5 text-left py-1 md:py-2">
                    <a href="/presscorner">Press Corner</a>
                  </p>
                  <p className=" leading-5 text-left py-1 md:py-2">
                    <a href="/software-development">Software Development</a>
                  </p>
                </div>
              </div>
</div>

          </div>
        </div>

      </div>
    

   
      
   


    </>
  );
};

export default Footer;
