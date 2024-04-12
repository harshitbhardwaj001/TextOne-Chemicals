import React from "react";

const Header = () => {
  return (
    <div
      id="HeaderRoot"
      className="bg-[#2f70b0] flex flex-row justify-between items-center p-4 lg:px-8 lg:py-4 absolute top-0 left-0 w-[100vw]"
    >
      <div className="flex flex-row gap-4 xs:max-md:gap-2">
        <div className="flex items-center gap-2 xs:max-md:gap-1">
          <img
            src="https://file.rendit.io/n/xHEnNbptPQsr3SbMavfX.svg"
            alt="Vector"
            className="w-4 xs:max-md:w-3"
          />
          <div className="text-sm text-white xs:max-md:text-[0.7rem]">
            0812345678910
          </div>
        </div>
        <div className="flex items-center gap-2 xs:max-md:gap-1">
          <img
            src="https://file.rendit.io/n/SE0WLtJ2lXUVdS3ansFH.svg"
            alt="EmailIcon"
            id="EmailIcon"
            className="w-4 xs:max-md:w-3"
          />
          <div className="text-sm text-white xs:max-md:text-[0.7rem]">
            contact@domain.com
          </div>
        </div>
      </div>
      <div className="flex gap-4 xs:max-md:gap-3">
        <img
          src="https://file.rendit.io/n/TvB9zGm3kicTwkyTYphk.svg"
          alt="FacebookIcon"
          id="FacebookIcon"
          className="w-5 xs:max-md:w-[1rem]"
        />
        <img
          src="https://file.rendit.io/n/euGmVP4VZVZpbaivs7nQ.svg"
          alt="InstagramIcon"
          id="InstagramIcon"
          className="w-5 xs:max-md:w-[1rem]"
        />
        <img
          src="https://file.rendit.io/n/dSvzqihW2GUF8IxXSry1.svg"
          alt="LinkedInIcon"
          id="LinkedInIcon"
          className="w-5 xs:max-md:w-[1rem]"
        />
      </div>
    </div>
  );
};

export default Header;
