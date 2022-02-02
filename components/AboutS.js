import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";

function AboutS() {
  return (
    <div className='mx-auto mt-14'>
      <Heading heading={"About Us"} bg_white={true} />
      <div className='flex flex-wrap md:flex-wrap md:flex-row lg:flex-nowrap justify-center gap-14 px-8 py-12'>
        <div className='text-justify shrink sm:w-3/4 w-full md:w-3/4 lg:w-1/2'>
          <p className='lg:text-xl text-md py-2 transition text-black'>
            Crest Valuation Services (CVS) is a part of Crest Advisors
            Group(CAG) being a full service Valuation Firm. We cater to full
            spectrum of purposes for which valuation opinions are required.
          </p>
          <p className='lg:text-xl text-md py-2 transition text-black'>
            Our strength lies in bringing together team of highly qualified,
            skilled and motivated professionals who are encouraged to lead,
            innovate and excel. With our multidisciplinary expertise accentuated
            by our honored board of advisors, across various industry segments,
            we have brought clarity to difficult and complex valuation
            situations and to provide defendable reports.
          </p>
          <Link href='/about'>
            <a>
              <button className='text-sm sm:text-lg font-bold my-3 border-white rounded-full px-8 py-3 hover:shadow-xl active:scale-90 shadow-md hover:border-[#48C7EC] border-2 hover:bg-white transition duration-150 ease-linear bg-white text-[#48C7EC]'>
                Know More
              </button>
            </a>
          </Link>
        </div>
        <div className='flex justify-center shrink'>
          <Image
            className='w-full h-full'
            src='https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            width={400}
            height={400}
            alt='banner-img2'
          />
        </div>
      </div>
    </div>
  );
}

export default AboutS;
