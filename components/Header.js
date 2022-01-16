// import Image from "next/image";
import {
  ChartBarIcon,
  UsersIcon,
  HomeIcon,
  BookOpenIcon,
  AnnotationIcon,
  // LightningBoltIcon,
  PhoneIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import Link from "next/link";

function Header() {
  return (
    <header className='flex gap-2 flex-col-reverse sm:flex-row m-5 mt-7 justify-between items-center h-auto'>
      <Link href='/'>
        <a>
          <Image
            className='object-contain hover:animate-pulse'
            src='https://cdn-icons-png.flaticon.com/512/5977/5977575.png'
            width={140}
            height={65}
            alt='logo'
          />
        </a>
      </Link>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <Link href='/'>
          <a>
            <HeaderItem Icon={HomeIcon} title='HOME' />
          </a>
        </Link>
        <Link href='/about'>
          <a>
            <HeaderItem Icon={AnnotationIcon} title='ABOUT' />
          </a>
        </Link>
        <Link href='/blogs'>
          <a>
            <HeaderItem Icon={BookOpenIcon} title='BLOG' />
          </a>
        </Link>
        <Link href='/services'>
          <a>
            <HeaderItem Icon={ChartBarIcon} title='SERVICES' />
          </a>
        </Link>
        <Link href='/team'>
          <a>
            <HeaderItem Icon={UsersIcon} title='TEAM' />
          </a>
        </Link>
        <Link href='/contact'>
          <a>
            <HeaderItem Icon={PhoneIcon} title='CONTACT' />
          </a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
