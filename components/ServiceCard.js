import React from "react";

function ServiceCard({ Icon, title, desc }) {
  return (
    <div className='border-2 rounded-md p-20 group border-gray-400 relative'>
      <div className='flex flex-col w-24 h-24 group-hover:opacity-5'>
        <Icon className='block w-12 h-12 mx-auto'></Icon>
        <p className='text-xl mt-5'>{title}</p>
      </div>
      <div className='img-overlay p-5 transition-opacity opacity-0 hover:opacity-100 absolute left-0 top-0 w-full h-full bg:[rgba(0,0,0,0.6)] text-white flex justify-center items-center flex-col '>
        <Icon className='block w-12 h-12 mx-auto'></Icon>
        <div className='text-xl font-bold'>{title}</div>
        <p className='text-center mt-1'>{desc}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
