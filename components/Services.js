import {
  ChartPieIcon,
  OfficeBuildingIcon,
  ScaleIcon,
  CashIcon,
} from "@heroicons/react/outline";
import Heading from "./Heading";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className='mx-auto mt-14 py-14 bg-[url("../db.png")]'>
      <Heading heading={"What We Do"} bg_white={false} />
      <div className='flex gap-4 justify-around px-20 py-16 flex-wrap'>
        <ServiceCard
          Icon={ChartPieIcon}
          title='Transactional'
          desc='Mergers & Acquisitions
                Joint Ventures
                Collaborations
                Fund Raising
                Business Sale & Purchase
                Voluntary Assessments
                Transactional Advisory
                Asset Liquidation'
        />
        <ServiceCard
          Icon={OfficeBuildingIcon}
          title='Regulatory'
          desc='RBI
                Income Tax
                SEBI
                Companies Act
                Stock Exchange
                IBC
                Courts and Tribunals
                '
        />
        <ServiceCard
          Icon={ScaleIcon}
          title='Accounting'
          desc='ESOPs
                Impairments
                IND AS Fair Value
                Market Value
                Purchase price allocation
        '
        />
        <ServiceCard
          Icon={CashIcon}
          title='Insolvency'
          desc='Land & Building
                Plant & Machinery
                Financial Assets
                Intangibles
                Enterprise Valuations
        '
        />
      </div>
    </div>
  );
}

export default Services;
