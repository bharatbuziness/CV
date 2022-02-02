import Image from "next/image";
import { CubeIcon } from "@heroicons/react/outline";
import Blogpost from "./Blogpost";
import Heading from "./Heading";

const Blogsection = ({ posts }) => {
  return (
    <div className='mx-auto mt-14 py-14 bg-[url("../db.png")]'>
      <Heading heading={"Latest Stories"} bg_white={false} />
      <main className='flex pt-5 flex-wrap gap-[2.4rem] px-20 mx-auto my-[2rem]'>
        <section className='basis-0 article flex-grow-[999]'>
          <div id='blog-sec'>
            {posts.map((post) => {
              return <Blogpost key={post.sys.id} post={post} />;
            })}
          </div>
        </section>
        <aside className='sticky border-2 box-border top-8 rounded-lg grow basis-[320px] sidebar h-fit w-[10rem] flex flex-col justify-center'>
          <div className='p-4'>
            <h1 className='text-4xl relative mb-10 inline after:content-[""] after:w-1/2 after:h-1 after:absolute after:right-0 after:-bottom-2 after:bg-blue-400'>
              Categories
            </h1>
            <ul className='mt-8'>
              {posts.map((post) => (
                <li className='text-lg mb-2 group' key={post.sys.id}>
                  <div className='transition-colors duration-150 hover:text-black group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-blue-400'>
                    <div className='group-hover:translate-x-1.5 duration-400 transition-all flex gap-4 items-center'>
                      <CubeIcon className='h-5 ' />
                      {post.fields.category}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Blogsection;
