import React from "react";

const CareerForm = () => {
  return (
    <div className="flex flex-col gap-8 w-full justify-center items-center mt-[5rem] md:mt-[10rem]">
      <div>
        <h1 className="[font-family:'Barlow-Bold',Helvetica] font-medium text-[#2F70B0] text-[50px] text-left xs:max-md:text-center xs:max-md:text-[35px] tracking-[0] leading-[normal]">
          <span className="font-bold">Join Our Team:</span> Be a Part of
          Something Special
        </h1>
        <div className="flex w-full justify-center mt-[5rem]">
          <form className="flex flex-col gap-4 xs:max-md:justify-center">
            <div className="xs:max-md:text-center">
              <label htmlFor="fullName">
                <input
                  type="text"
                  id="fullName"
                  name="from_name"
                  placeholder="Full name"
                  className="bg-[rgba(255,249,229,0.9)]  rounded-[0.2rem] px-3 py-2 w-[50vw] xs:max-md:w-full xs:max-md:text-center"
                  required
                />
                <span className="sr-only text-black">Full name</span>
              </label>
            </div>
            <div className="">
              <label htmlFor="phoneNumber">
                <input
                  type="text"
                  id="phoneNumber"
                  name="from_number"
                  placeholder="Phone number"
                  className="bg-[rgba(255,249,229,0.9)]  rounded-[0.2rem] px-3 py-2 w-full xs:max-md:text-center"
                  required
                />
                <span className="sr-only">Phone number</span>
              </label>
            </div>
            <div className="">
              <label htmlFor="email">
                <input
                  type="text"
                  id="email"
                  name="from_mail"
                  placeholder="Email"
                  className="bg-[rgba(255,249,229,0.9)]  rounded-[0.2rem] px-3 py-2 w-full xs:max-md:text-center"
                  required
                />
                <span className="sr-only">Email</span>
              </label>
            </div>
            <div className="py-2 flex items-center xs:max-md:justify-center gap-3">
              <label htmlFor="resume" className="cursor-text shrink-0 pl-3">
                Resume*
              </label>
              <div className="flex w-full overflow-hidden space-between items-center">
                <input
                  className="text-xs"
                  type="file"
                  name="from_resume"
                  required
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="linkedin">
                <input
                  type="text"
                  id="linkedin"
                  name="from_linkedin"
                  placeholder="LinkedIn (optional)"
                  className="bg-[rgba(255,249,229,0.9)]  rounded-[0.2rem] px-3 py-2 w-full xs:max-md:text-center"
                />
                <span className="sr-only">LinkedIn (optional)</span>
              </label>
            </div>
            <div className="">
              <label htmlFor="portfolio">
                <input
                  type="text"
                  id="portfolio"
                  name="from_portfolio"
                  placeholder="Link to portfolio (optional)"
                  className="bg-[rgba(255,249,229,0.9)]  rounded-[0.2rem] px-3 py-2 w-full xs:max-md:text-center"
                />
                <span className="sr-only">Link to portfolio (optional)</span>
              </label>
            </div>
            <div className="">
              <label htmlFor="other">
                <input
                  type="text"
                  id="other"
                  name="from_other"
                  placeholder="Additional (optional)"
                  className="bg-[rgba(255,249,229,0.9)]  rounded-[0.2rem] px-3 py-2 w-full xs:max-md:text-center"
                />
                <span className="sr-only">Additional (optional)</span>
              </label>
            </div>
            <button
              className=" bg-[#FE7A36] disabled py-4 md:h-12 text-sm md:text-base text-white font-bold flex tracking-wide items-center justify-center uppercase md:w-full md:mt-6 rounded w-[calc(100%+1rem)] -ml-2 mt-[1rem] md:ml-0"
              type="submit"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
