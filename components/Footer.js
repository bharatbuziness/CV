import Image from "next/image";
import Link from "next/link";
import React from "react";
import p1 from "../assets/subs.svg";

function Footer() {
  return (
    <div className='mt-14 flex flex-col text-black mx-auto px-20'>
      <div className='flex items-center justify-between'>
        <div className='email'>
          <h3 className='text-3xl'>Subscribe Us</h3>
          <input type='email' name='' id='' />
        </div>
        <div className='img'>
          <Image src={p1} width={300} height={300} alt='foot-img' />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='logo-p w-1/3'>
          <Image
            className='object-contain hover:animate-pulse'
            src='https://cdn-icons-png.flaticon.com/512/5977/5977575.png'
            width={140}
            height={65}
            alt='logo'
          />
          <p>
            Crest Valuation Services (CVS) is a part of Crest Advisors
            Group(CAG) being a full service Valuation Firm. We cater to full
            spectrum of purposes for which valuation opinions are required.
          </p>
        </div>
        <div className='menu'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='social'></div>
      </div>
    </div>
  );
}

export default Footer;
