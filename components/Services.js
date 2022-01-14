import {
  ChartPieIcon,
  OfficeBuildingIcon,
  ScaleIcon,
  CashIcon,
} from "@heroicons/react/outline";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className='mx-auto mt-14 py-14 bg-[url("../db.png")]'>
      <div className='block text-center my-5'>
        <h1 className='text-white mx-auto relative inline-block z-50 text-center text-3xl sm:text-6xl before:block before:-z-50 before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#48C7EC]'>
          What We Do
        </h1>
      </div>
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
