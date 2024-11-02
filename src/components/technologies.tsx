import { Image } from "../assets/index";
const Technologies = () => {
  return (
    <div className="lg:px-36 lg:py-16 md:px-24 md:py-16 px-[20px] py-[20px] block bg-[#FFFFFF] w-full lg:text-left  sm:text-center" >
 
     

        <div className="grid lg:gap-24 md:gap-24 gap-12">
        <img src={Image.star1}  alt="logo"  className="h-[40px] w-full object-fit"  /> 

        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center justify-between gap-12">
    
            <div className="flex items-start justify-between gap-4 ">
              <div>
              <img src={Image.star2}  alt="logo"  className="h-[40px] w-[130px] object-fit"  /> 
       
              </div>

              <div>
              <p className="text-black text-[22px] font-bold md:text-left">JAVA</p>
              <div className="text-[#595959] text-[16px] leading-[25px] md:text-left" >
              Develop versatile applications using
Java, known for its portability and
extensive ecosystem.     </div>
                </div>

           

            </div>
            <div className="flex items-start justify-between gap-4 ">
              <div>
              <img src={Image.sun}  alt="logo"  className="h-[40px] w-[130px] object-fit"  /> 
              </div>

              <div>
              <p className="text-black text-[22px] font-bold md:text-left">.NET</p> 
              <div className="text-[#595959] text-[16px] leading-[25px] md:text-left" >
              Utilise the .NET framework to create
high-performance applications across
various platforms.     </div>
                </div>

           

            </div>
         
        </div>

 
     
        </div>
    </div>
 
  );
};

export default Technologies;
