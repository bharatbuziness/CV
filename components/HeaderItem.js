function HeaderItem({ Icon, title }) {
  return (
    <div className='flex flex-col group items-center cursor-pointer w-12 group sm:w-20 hover:text-black'>
      <Icon className='text-gray-800 h-8 mb-1 group-hover:animate-bounce group-hover:text-black'></Icon>
      <p className='tracking-widest opacity-0 group-hover:opacity-100'>
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
