/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Heading from "./Heading";
import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const datas = [
  {
    id: 1,
    url: "https://cdn-icons-png.flaticon.com/512/3800/3800024.png",
  },
  {
    id: 2,
    url: "https://cdn-icons.flaticon.com/png/512/2504/premium/2504903.png?token=exp=1643823286~hmac=b851e92fea185cdc041b314a4733cf2c",
  },
  {
    id: 3,
    url: "https://cdn-icons.flaticon.com/png/512/2504/premium/2504929.png?token=exp=1643823606~hmac=dd34e73981b97fff951e10a29044f196",
  },
  {
    id: 4,
    url: "https://cdn-icons.flaticon.com/png/512/3670/premium/3670157.png?token=exp=1643823606~hmac=4956ff2f4b85e9f2c361776f69d22166",
  },
  {
    id: 5,
    url: "https://cdn-icons.flaticon.com/png/512/3536/premium/3536559.png?token=exp=1643823606~hmac=732bff6af0e3f7a5d35834f1069123eb",
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
