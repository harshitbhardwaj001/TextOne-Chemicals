import React from "react";

const CareerForm = () => {
  return (
    <div className="flex flex-col gap-8 absolute top-[110%] w-full justify-center items-center">
      <div>
        <h1 className="[font-family:'Barlow-Bold',Helvetica] font-medium text-[#2F70B0] text-[50px] text-left tracking-[0] leading-[normal]">
          <span className="font-bold">Join Our Team:</span> Be a Part of
          Something Special
        </h1>
        <div className="flex w-full justify-center mt-[5rem]">
          <form className="flex flex-col gap-4">
            <div className="">
              <label htmlFor="fullName">
                <input
                  type="text"
                  id="fullName"
                  name="from_name"
                  placeholder="Full name"
                  className="bg-[rgba(255,255,255,0.9)] rounded-sm px-3 py-2 w-[50vw]"
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
                  className="bg-[rgba(255,255,255,0.9)] rounded-sm px-3 py-2 w-full"
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
                  className="bg-[rgba(255,255,255,0.9)] rounded-sm px-3 py-2 w-full"
                  required
                />
                <span className="sr-only">Email</span>
              </label>
            </div>
            <div className="py-2 flex items-center gap-3">
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
                  className="bg-[rgba(255,255,255,0.9)] rounded-sm px-3 py-2 w-full"
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
                  className="bg-[rgba(255,255,255,0.9)] rounded-sm px-3 py-2 w-full"
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
                  className="bg-[rgba(255,255,255,0.9)] rounded-sm px-3 py-2 w-full"
                />
                <span className="sr-only">Additional (optional)</span>
              </label>
            </div>
            <button
              className=" bg-white font-[500] disabled py-4 md:h-12 text-sm md:text-base text-black flex items-center justify-center uppercase md:w-full mt-auto md:mt-6 rounded w-[calc(100%+1rem)] -ml-2 md:ml-0"
              type="submit"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
      <div
        className={`lg:hidden left-0 bottom-0 w-full fixed px-2 pb-2 bg-[#000]`}
      >
        <button className="rounded shadow-xl w-full bg-[#000] px-3 py-4 text-white uppercase font-[500]">
          Apply
        </button>
      </div>
    </div>
  );
};

export default CareerForm;
