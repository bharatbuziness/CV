import Header from "./Header";

function Skeleton() {
  return (
    <>
      <Header />
      <div className='skeleton mt-20 mx-[30px] max-w-[1200px] my-[20px]'>
        <div className='s-banner bg-[#cecece] rounded-lg mx-0 my-[20px] py-[12%] px-0'></div>
        <div className='s-header bg-[#cecece] rounded-lg mx-0 my-[20px] py-[15px] px-0 max-w-[500px]'></div>
        <div className='s-content bg-[#cecece] rounded-lg mx-0 my-[20px] py-[8px] max-w-[1000px]'></div>
        <div className='s-content bg-[#cecece] rounded-lg mx-0 my-[20px] py-[8px] max-w-[1000px]'></div>
        <div className='s-content bg-[#cecece] rounded-lg mx-0 my-[20px] py-[8px] max-w-[1000px]'></div>
      </div>
    </>
  );
}

export default Skeleton;
