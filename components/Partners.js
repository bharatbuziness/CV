import Heading from "./Heading";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";

const datas = [
  {
    id: 1,
    url: p1,
  },
  {
    id: 2,
    url: p2,
  },
  {
    id: 3,
    url: p3,
  },
  {
    id: 4,
    url: p4,
  },
  {
    id: 5,
    url: p5,
  },
];

function Partners() {
  const items = [];
  datas.map((data) =>
    items.push(
      <Image id={data.id} src={data.url} width={80} height={80} alt='img-1' />
    )
  );
  const responsive = {
    0: { items: 1 },
    550: { items: 3 },
    1250: { items: 5 },
  };
  return (
    <div className='mx-auto mt-14'>
      <Heading heading={"Our Partners"} bg_white={true} />

      <div className='relative mt-20'>
        <div className='h-32 text-center flex gap-20 justify-between px-10 sm:px-20 w-full space-x-10 sm:space-x-20'>
          <AliceCarousel
            autoPlay
            autoPlayInterval={1000}
            animationDuration={2000}
            animationType='slide'
            infinite
            mouseTracking
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
            items={items}
            responsive={responsive}
          />
        </div>
      </div>
    </div>
  );
}
export default Partners;
