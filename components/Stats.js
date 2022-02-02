import Heading from "./Heading";
import StatsCard from "./StatsCard";

function Stats() {
  return (
    <div className='mx-auto mt-14'>
      <Heading heading={"Statistics"} bg_white={true} />
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
