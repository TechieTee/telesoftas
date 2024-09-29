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
    <div className="px-24 py-16 block bg-[#F5F8FF] w-full">

      <div className="grid items-center justify-between gap-16 lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-1">

        <div className="flex items-center justify-between gap-2 ">
          <div>
            <h2 className="text-black text-3xl lg:text-[50px] font-bold leading-[60px] mb-4">
              Contact Us
            </h2>
            <h4 className="text-black text-[18px] font-normal  mb-14 leading-[33px]">
              57 Ebitu Ukiwe Street Jabi, Abuja,
              FCT Nigeria
            </h4>
          </div>



          <div className="lg:w-[10%]  md:w-[10%] sm:w-[100%]">
            <div className="flex items-center justify-center">
              <div className="flex-grow border-t border-black"></div>
              <span className="mx-2 text-[16px] text-black">Or</span>
              <div className="flex-grow border-t border-black"></div>
            </div>
          </div>
        </div>




        <form className=" flex flex-col gap-y-6  "
        // onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-black text-2xl lg:text-[30px] font-bold leading-[60px] mb-4">
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
          <h4 className="text-[#595959] text-[14px] font-normal mr-16  leading-[27px]">
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
            className="lg:w-[70%] md:w-full sm:w-full bg-black text-white font-bold h-[45px] text-[14px]  font-meduim px-4"
          >
            BOOK A FREE IDEA VALUATION CONSULTATION
          </button>

        </form>
      </div>

    </div>
  );
};

export default Contact;
