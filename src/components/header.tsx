import React, { useEffect, useRef, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
 import { Image } from "../assets/index";
// import DefaultButton from "../../../components/reuseables/DefaultButton";
import { CiUnlock } from "react-icons/ci";
import { PiWallet } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa";
import { LiaWeightSolid } from "react-icons/lia";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  const navItems = ["About Us", "Our Expertise", "Contact Us"];
  const [isOpen, setisOpen] = useState(false);
  function toggleDropdown() {
    setisOpen(!isOpen);
  }
  const [product, setproduct] = useState("Enterprise Solution");
  const productArr = ["Enterprise Solution", "Payment Solution"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const dropdownRef:any = useRef(null);
  const dropdownRefs:any = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const handleClickOutside = (index:any, event:any) => {
        // console.log(index)
      const navbarItem = document.getElementById(`navItem-${selectedIndex}`);
      console.log(navbarItem,'the nav item')
      console.log(dropdownRefs.current[selectedIndex], dropdownRefs)
      console.log(selectedIndex,'clicking outside')
      if (
        navbarItem &&
        navbarItem.contains(event.target) &&
        !(dropdownRefs.current[selectedIndex] && dropdownRefs.current[selectedIndex].contains(event.target))

       
      ) {
        // Clicked outside the dropdown and its trigger, so reset selectedIndex
        setSelectedIndex(-1);
      }
    };
  
    const clickHandler = (event:any) => {
      handleClickOutside(selectedIndex, event);
    };
  
    // Add event listener when component mounts
    window.addEventListener("click", clickHandler);
  
    // Cleanup by removing event listener when component unmounts
    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, []);
  

  const handleItemClick = (index: any,e:any) => {
    console.log(index,'when clicking')
    if (selectedIndex === index) {
      setSelectedIndex(-1); // Close the dropdown if clicked again
    } else {
      setSelectedIndex(index); // Open the dropdown for the clicked item
    }
    // handleClickOutside(index,e);

  };

  console.log(selectedIndex,'the selected index')
  const navigate= useNavigate()

  const enterpriseSolution=[{icon:<CiUnlock className="text-[#EB6A03] m-auto"/>,title:'PayAccess Payment gateway',descrp:'Easy payment online',navigate:'/product/#payaccess-gateway'},{icon:<PiWallet className="text-[#EB6A03] m-auto"/>,title:'PayAccess Mobile Wallet',descrp:'Easy payment online',navigate:'/product/#payaccess-mobile-wallet'},{icon:<LiaWeightSolid className="text-[#EB6A03] m-auto"/>,title:'PayAccess Point-of-sale (POS)',descrp:'Easy payment online',navigate:'/product/#payaccess-POS'},{icon:<IoBagOutline className="text-[#EB6A03] m-auto"/>,title:'PayAccess Agency Banking Services',descrp:'Easy payment online',navigate:'/product/#payaccess-agency-banking'},]
  const smeSolution=[{icon:'',title:'Online Checkout',descrp:'For small businesses to add our checkout to their websites',navigate:'/paymentSolution/#onlineCheckout'},{icon:'',title:'Payment links',descrp:'Sell online without a website Create a payment link with just a few clicks.',navigate:'/paymentSolution/#paymentLinks'},{icon:'',title:'Virtual terminals',descrp:'Sell online without a website Create a payment link with just a few clicks.',navigate:'/paymentSolution/#virtualTerminals'}]

  const DeveloperApi=[{title:'API documentation',text:'For small businesses to add our checkout to their websites',navigate:''}]
  const CompanyApi=[ {icon:<FaRegAddressCard/> , title:'Careers',text:'For small businesses to add our checkout to their websites',navigate:'/about/#careers'},{title:'About Us',text:'Sell online without a website Create a payment link with just a few clicks.',navigate:'/about'},{title:'Compliance ',text:'Sell online without a website Create a payment link with just a few clicks.', navigate:'/compliance'}, ]

  const helpApi=[{title:'Quick Help',text:'For small businesses to add our checkout to their websites',navigate:'/FAQs'},{title:'Contact Us',text:'Sell online without a website Create a payment link with just a few click.',navigate:'/about/#contact'}]

const navItemdropdown:any=selectedIndex===1?DeveloperApi:selectedIndex===3?CompanyApi:selectedIndex===2&&helpApi 

  return (
    <nav className="py-[15px] px-[4%] flex items-center justify-between   bg-white z-50 fixed w-full">
    <img src={Image.logo} width={280} alt="logo" onClick={()=>navigate('/')} className='cursor-pointer'/> 

      <div className="hidden md:flex items-center gap-[20px]">
        {navItems.map((val, index) => (
          <div
            className=" text-[#A4B3C1] hover:text-[#0C394B]  text-[16px] relative cursor-pointer"
            key={index}>
            <div className="flex items-center" onClick={(e:any) => handleItemClick(index,e)} id={`navItem-${index}`} ref={(ref) => (dropdownRefs.current[index] = ref)}>
            <p >{val}</p>
           
            </div>
        
          </div>
        ))}
      </div>

    

      <button className="md:hidden ">
        <div
          className="relative w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
          onClick={toggleDropdown}
        >
          <span
            className={`absolute h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 bg-black transform transition-all duration-200 ease-in-out ${
              isOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>

      <div
        className={`absolute w-[100%] bottom-[0]  h-fit border-black  transition-transform duration-75 px-[8%] py-[20px] z-10 left-0  grid rounded-b-lg bg-white gap-[8px] ${
          isOpen ? "translate-y-full" : "translate-y-[-100vh]  "
        }`}
      >
   
        {navItems.map((val, index) => (
          <div className="" key={index}>
            <p>{val}</p>
           
          </div>
        ))}
 
      </div>
    </nav>
  );
};

export default Header;
