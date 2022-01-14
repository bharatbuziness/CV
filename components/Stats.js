import StatsCard from "./StatsCard";

function Stats() {
  return (
    <div className='mx-auto mt-14'>
      <div className='block text-center my-5'>
        <h1 className='text-white mx-auto relative inline-block z-50 text-center text-3xl sm:text-6xl before:block before:-z-50 before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#48C7EC]'>
          Statistics
        </h1>
      </div>
      <div className='flex gap-4 justify-around px-20 py-16 flex-wrap'>
        <StatsCard num={250} desc='Many years of combined team experience' />
        <StatsCard num={30} desc='Industries covered across the globe' />
        <StatsCard
          num={500}
          desc='Companies covered under our services offerings'
        />
        <StatsCard num={3000} desc='Reports written across sectors' />
      </div>
    </div>
  );
}

export default Stats;
