import React from "react";

const AboutBgSvg = () => {
  return (
    <>
      <span
        aria-hidden="true"
        className="bg-svg hidden lg:inline-block absolute bottom-0 -left-10 dark:hidden"
      >
        <img
          src={"/extra/dots.svg"}
          width={102}
          height={153}
          alt="dots background"
        />
      </span>
      <span
        aria-hidden="true"
        className="bg-svg hidden lg:inline-block absolute top-7 -right-10 dark:hidden"
      >
        <img
          src={"/extra/dots.svg"}
          width={102}
          height={153}
          alt="dots background"
        />
      </span>
    </>
  );
};

export default AboutBgSvg;