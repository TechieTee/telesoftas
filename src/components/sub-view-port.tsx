import { Image } from "../assets/index";
const SubViewPort = () => {
  return (
    <div className="lg:grid bg-[#00012D]">
             <div className="grid grid-cols-2 items lg:grid-cols-6 gap-4 py-12">
        <div className="col-span-1 self-center ">
        <img src={Image.Logo2}  alt="logo"  className="logo grayscale hover:grayscale-0 transition duration-300 ease-in-out"/> 
        </div>
        <div className=" col-span-1 self-center  ">
        <img src={Image.Logo3}  alt="logo"  className="logo grayscale hover:grayscale-0 transition duration-300 ease-in-out"/> 
       
        </div>
        <div className="col-span-1 self-center ">
        <img src={Image.Logo2}  alt="logo"  className="logo grayscale hover:grayscale-0 transition duration-300 ease-in-out"/> 
        </div>
        <div className=" col-span-1 self-center  ">
        <img src={Image.Logo3}  alt="logo"  className="logo grayscale hover:grayscale-0 transition duration-300 ease-in-out"/> 
       
        </div>
        <div className="col-span-1 self-center ">
        <img src={Image.Logo2}  alt="logo"  className="logo grayscale hover:grayscale-0 transition duration-300 ease-in-out"/> 
        </div>
        <div className=" col-span-1 self-center  ">
        <img src={Image.Logo3}  alt="logo"  className="logo grayscale hover:grayscale-0 transition duration-300 ease-in-out"/> 
       
        </div>
        </div>

       

      

       
      

       

   
    </div>
  );
};

export default SubViewPort;
