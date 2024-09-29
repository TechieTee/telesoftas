import React, { useState } from "react";
import Input from "./input";

// type ContactUsForm = {
//   FullName: string;
//   Email: string;

// };
const Contact = () => {
  // const {
  //   handleSubmit,
  //   formState: { errors },
  //   register,
  //   reset,
  // } = useForm({
  //   defaultValues: {
  //     FullName: "",
  //     Email: "",

  //   },
  // });

  //const [isSubmitting, setIsSubmitting] = useState(false);

  // const onSubmit: SubmitHandler<ContactUsForm> = async ({
  //   FullName,
  //   Email,

  // }) => {
  //   setIsSubmitting(true);
  //   try {
  //     if (!Email || !FullName) return;
  //     const response = await sendContactUsInfo({
  //       FullName,
  //       Email,

  //     });
  //     reset();
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
  return (
    <div className="lg:px-24 lg:py-16 md:px-24 md:py-16 px-[20px] py-[20px] block bg-[#F5F8FF] w-full">

      <div className="grid items-center justify-between gap-16 lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-1">

        <div className="flex items-center justify-between gap-2 ">
          <div className="lg:w-[90%]  md:w-[90%] w-[100%]">
            <h2 className="text-black text-3xl lg:text-left md:text-left text-center lg:text-[50px] font-bold lg:leading-[60px] mb-4">
              Contact Us
            </h2>
            <h4 className="text-black text-[18px] lg:text-left md:text-left text-center font-normal  mb-14 lg:leading-[33px]">
              57 Ebitu Ukiwe Street Jabi, Abuja,
              FCT Nigeria
            </h4>
          </div>



          {/* <div className="lg:w-[10%]  md:w-[10%] w-[100%]">
            <div className="flex items-center justify-center">
              <div className="flex-grow border-t border-black"></div>
              <span className="mx-2 text-[16px] text-black">Or</span>
              <div className="flex-grow border-t border-black"></div>
            </div>
          </div> */}
        </div>




        <form className=" flex flex-col gap-y-6  "
        // onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-black text-2xl lg:text-left md:text-left text-center lg:text-[30px] font-bold leading-[60px] mb-4">
            Join Our Mailing List
          </h2>

          <div className="flex gap-x-4">
            <Input
              required
              label=""
              name="FullName"
              placeholder="Full Name"
            // register={register}
            />

            <Input
              required
              label=""
              name="Email"
              placeholder="Email"
            // register={register}
            />
          </div>
          <h4 className="text-[#595959] lg:text-left md:text-left text-center text-[14px] font-normal lg:mr-16  leading-[27px]">
            This form collects information we will use to send vou updates about promotions special otters, and news. we will not share or sell your personal information. You con unsuoschoe or any time
          </h4>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" />
            <div className="font-medium text-sm text-[#595959]">
              Yes, I consent to receiving emails
            </div>
          </div>

          <button
            // isLoading={isSubmitting}
            className="lg:w-[70%] md:w-full sm:w-full bg-black text-white font-bold h-[45px] lg:text-[14px] text-[10px]  font-meduim px-4"
          >
            BOOK A FREE IDEA VALUATION CONSULTATION
          </button>

        </form>
      </div>

    </div>
  );
};

export default Contact;
