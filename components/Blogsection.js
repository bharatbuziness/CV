import Image from "next/image";
import Blogpost from "./Blogpost";

const Blogsection = ({ posts }) => {
  return (
    <div className='mx-auto mt-14 py-14 bg-[url("../db.png")]'>
      <div className='block text-center my-5'>
        <h1 className='text-white mx-auto relative inline-block z-50 text-center text-3xl sm:text-6xl before:block before:-z-50 before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#48C7EC]'>
          Latest Stories
        </h1>
      </div>
      <main className='flex pt-5 flex-wrap gap-[2rem] max-w-[80%] mx-auto my-[2rem]'>
        <section className='basis-0 article flex-grow-[999]'>
          <div id='blog-sec'>
            {/* <div className='box bg-[#eee]  h-[30rem] flex justify-center items-center '>
              {posts[0].fields.title} grid gap-[2rem]
              {/* <img src={posts[0].fields.image.fields.file.url} /> 
            </div> */}
            {posts.map((post) => {
              return <Blogpost key={post.sys.id} post={post} />;
            })}
          </div>
        </section>
        <aside className='sticky top-8 grow bg-[#eee] basis-[300px] sidebar h-[10rem] w-[10rem] flex justify-center items-center'>
          Sidebar
        </aside>
      </main>
    </div>
  );
};

export default Blogsection;
