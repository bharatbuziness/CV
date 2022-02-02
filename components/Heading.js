import React from "react";

function Heading({ heading, bg_white }) {
  return (
    <div className='block text-center my-5'>
      <h1
        className={`${
          bg_white ? "text-black" : "text-white"
        } mx-auto relative inline-block z-50 text-center text-3xl sm:text-6xl before:black before:-bottom-4 before:absolute before:w-1/2 before:h-1 before:bg-[#48C7ec]`}>
        {heading}
      </h1>
    </div>
  );
}

export default Heading;

//before:block before:-z-50 before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#48C7EC]
