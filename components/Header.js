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

function Header() {
  return (
    <header className='flex gap-2 flex-col-reverse sm:flex-row m-5 mt-7 justify-between items-center h-auto'>
      <Image
        className='object-contain hover:animate-pulse'
        src='https://cdn-icons-png.flaticon.com/512/5977/5977575.png'
        width={140}
        height={65}
        alt='logo'
      />
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <a href=''>
          <HeaderItem Icon={HomeIcon} title='HOME' />
        </a>
        <a href=''>
          <HeaderItem Icon={AnnotationIcon} title='ABOUT' />
        </a>
        <a href=''>
          <HeaderItem Icon={BookOpenIcon} title='BLOG' />
        </a>
        <a href=''>
          <HeaderItem Icon={ChartBarIcon} title='SERVICES' />
        </a>
        <a href=''>
          <HeaderItem Icon={UsersIcon} title='TEAM' />
        </a>
        <a href=''>
          <HeaderItem Icon={PhoneIcon} title='CONTACT' />
        </a>
      </div>
    </header>
  );
}

export default Header;
