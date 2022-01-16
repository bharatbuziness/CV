import Image from "next/image";
import { UserIcon } from "@heroicons/react/outline";
import moment from "moment";
import Link from "next/link";

function Blogpost({ post }) {
  const { title, slug, author, category, subtitle, image } = post.fields;
  const { url } = image.fields.file;
  const date = moment(post.sys.updateAt).utc().format("MM/DD/YYYY");
  // console.log(image);
  return (
    <>
      <Link href={"/blogs/" + slug}>
        <a>
          <div className='mb-14 cursor-pointer'>
            <div className='author flex gap-2 mb-1'>
              <UserIcon className='h-6' />
              {author}
            </div>
            <div className='flex gap-5'>
              <div className='w-full md:w-1/2'>
                <div className='text-3xl lg:text-5xl text-white font-bold'>
                  {title}
                </div>
                <div className='subtitle md:text-lg mt-4'>{subtitle}</div>
                <div className='mt-3 flex items-center'>
                  <div className='text-sm date mr-3'>{date}</div>
                  <div className='category text-gray-800 text-sm bg-[#f2f2f2] hover:bg-[#e6e6e6] inline px-2 py-0.5 border-2 border-transparent rounded-full'>
                    {category}
                  </div>
                </div>
              </div>
              <div className='hidden md:block w-[230px] h-[174px] relative'>
                <Image src={`https:/${url}`} layout='fill' alt='blog-image' />
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}

export default Blogpost;
