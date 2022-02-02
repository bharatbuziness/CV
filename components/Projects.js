import Heading from "./Heading";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import jiva from "../assets/jiva.jpg";
import tm from "../assets/tm.svg";
import td from "../assets/td.jpg";
import mbl from "../assets/mbl.jpg";
import mbi from "../assets/mbi.jpg";
import apg from "../assets/apg.jpg";
import jn from "../assets/jn.png";
import ecl from "../assets/ecl.png";
import stm from "../assets/stm.png";
import usi from "../assets/usi.jpg";
import bf from "../assets/bf.png";
import tp from "../assets/tp.png";
import ul from "../assets/ul.jpg";
import Image from "next/image";

function Projects() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      breakpoints: {
        "(min-width: 500px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 20 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 2, spacing: 10 },
        },
      },
      slides: { perView: 1 },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div className='mx-auto mt-14'>
      <Heading heading={"Latest Projects"} bg_white={true} />

      <div className='flex flex-wrap md:flex-wrap md:flex-row lg:flex-nowrap justify-center gap-14 md:px-20 px-8  py-12'>
        <div className='text-justify shrink sm:w-3/4 w-full md:w-3/4 lg:w-1/2 lg:flex lg:items-center'>
          <p className='lg:text-xl text-md py-2 transition text-black'>
            We have done more than 1000 projects in the short period time and
            all the projects are done by our expert team with 100% satisfaction.
          </p>
        </div>
        <div ref={sliderRef} className='keen-slider'>
          <div className='keen-slider__slide number-slide1'>
            <Image src={jiva} layout='fill' alt='banner-img1' />
          </div>
          <div className='keen-slider__slide number-slide2'>
            <Image
              src={tm}
              layout='fill'
              alt='banner-img1'
              className='bg-white object-contain'
            />
          </div>
          <div className='keen-slider__slide number-slide3'>
            <Image src={td} layout='fill' alt='banner-img1' />
          </div>
          <div className='keen-slider__slide number-slide4'>
            <Image src={mbl} layout='fill' alt='banner-img1' />
          </div>
          <div className='keen-slider__slide number-slide5'>
            <Image src={jn} layout='fill' alt='banner-img1' />
          </div>
          <div className='keen-slider__slide number-slide6'>
            <Image src={mbi} layout='fill' alt='banner-img1' />
          </div>
          <div className='keen-slider__slide number-slide7'>
            <Image
              src={ecl}
              layout='fill'
              alt='banner-img1'
              className='bg-[#F8FAF9] object-contain'
            />
          </div>
          <div className='keen-slider__slide number-slide8'>
            <Image
              src={stm}
              layout='fill'
              alt='banner-img1'
              className='bg-white object-contain'
            />
          </div>
          <div className='keen-slider__slide number-slide9'>
            <Image
              src={apg}
              layout='fill'
              alt='banner-img1'
              className='bg-white object-contain'
            />
          </div>
          <div className='keen-slider__slide number-slide10'>
            <Image
              src={usi}
              layout='fill'
              alt='banner-img1'
              className='bg-white object-contain'
            />
          </div>
          <div className='keen-slider__slide number-slide11'>
            <Image
              src={bf}
              layout='fill'
              alt='banner-img1'
              className='bg-white object-contain'
            />
          </div>
          <div className='keen-slider__slide number-slide12'>
            <Image
              src={ul}
              layout='fill'
              alt='banner-img1'
              className='bg-white object-contain'
            />
          </div>
          <div className='keen-slider__slide number-slide13'>
            <Image
              src={tp}
              layout='fill'
              alt='banner-img1'
              className='bg-white object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
