import CountUp from "react-countup";
function StatsCard({ num, desc }) {
  return (
    <div className='p-14 group relative border-2 border-transparent rounded-lg shadow-lg bg-gradient-to-r from-cyan-600 to-cyan-700 text-white'>
      <div className='flex flex-col w-[9rem] h-24'>
        {/* <div className='w-0 h-0 border-[80px] border-transparent border-b-[#48C7EC] relative -top-[80px] after:content-[""] after:absolute after:-left-[80px] after:top-[80px] after:w-0 after:h-0 after:border-[80px] after:border-transparent after:border-t-[#48C7EC]' /> */}
        {/* <div className='absolute top-[145px] left-0 right-0 text-center mx-auto text-white'> */}
        <p className='font-bold text-[2.2rem] text-center'>
          <CountUp start={0} end={num} duration={8} />+
        </p>
        {/* </div> */}
        <p className='mt-1 text-center'>{desc}</p>
      </div>
    </div>
  );
}

export default StatsCard;
