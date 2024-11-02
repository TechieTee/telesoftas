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
    <div className=" grid items-center justify-center  lg:grid-cols-1  md:grid-cols-1 sm:grid-cols-1 lg:px-36 lg:py-16 md:px-24 md:py-16 px-[20px] py-[20px] block bg-[#F5F8FF] w-full" id="contact">

        <form className=" flex items-center justify-center flex-col gap-y-6  "
        // onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-black text-2xl lg:text-left md:text-left text-center lg:text-[30px] font-bold leading-[60px] mb-4">
Book a FREE Consultation
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
         

  
        </form>

      </div>


  );
};

export default Contact;
