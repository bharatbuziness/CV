import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import Image from "next/image";
import Link from "next/link";

function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className='navigation-wrapper'>
        <div
          ref={sliderRef}
          className='keen-slider h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
          <div className='keen-slider__slide number-slide1 relative'>
            <Image
              src='https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              layout='fill'
              alt='banner-img1'
            />
            <div className='absolute top-1/2 w-full text-center'>
              <p className='text-sm sm:text-xl'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <Link href='/about'>
                <a>
                  <button className='text-sm sm:text-lg text-[#48C7EC] bg-white px-8 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
                    Lorem, ipsum.
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div className='keen-slider__slide number-slide2'>
            <Image
              src='https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              layout='fill'
              alt='banner-img2'
            />
            <div className='absolute top-1/2 w-full text-center'>
              <p className='text-sm sm:text-xl'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className='text-sm sm:text-lg text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
                Lorem, ipsum.
              </button>
            </div>
          </div>
          <div className='keen-slider__slide number-slide3'>
            <Image
              src='https://images.pexels.com/photos/327064/pexels-photo-327064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              layout='fill'
              alt='banner-img3'
            />
            <div className='absolute top-1/2 w-full text-center'>
              <p className='text-sm sm:text-xl'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className='text-sm sm:text-lg text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
                Lorem, ipsum.
              </button>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className='dots'>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  "dot" + (currentSlide === idx ? " active" : "")
                }></button>
            );
          })}
        </div>
      )}
    </>
  );
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'>
      {props.left && (
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      )}
      {!props.left && (
        <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
      )}
    </svg>
  );
}

export default HeroBanner;
