import Header from "../../components/Header";
import Head from "next/head";
import { createClient } from "contentful";
import moment from "moment";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FaGrav } from "react-icons/fa";
import {
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Skeleton from "../../components/Skeleton";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "post",
  });
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths: paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug, //returns an array
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      post: items[0],
      revalidate: 10,
    },
  };
}

function Blog({ post }) {
  if (!post) {
    return <Skeleton />;
  }
  const { title, author, category, image, content } = post.fields;
  const { url } = image.fields.file;
  const { width } = image.fields.file.details.image;
  const { height } = image.fields.file.details.image;
  const date = moment(post.sys.updateAt).utc().format("MM/DD/YYYY");
  return (
    <div>
      <Head>
        <title>Crest Valuations - Blogs</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className='text-black flex justify-center flex-col items-center mt-20 mx-[30px]'>
        <div className='banner mb-10'>
          <h1 className='font-semibold md:text-7xl text-5xl'>{title}</h1>
          <div className='author flex gap-2 mb-1 justify-between mt-8'>
            <div className='flex gap-3 items-center tracking-wider cursor-pointer'>
              <FaGrav className='md:text-6xl text-3xl' />
              <div className='flex flex-col gap-0.5'>
                <span className='text-sm whitespace-nowrap md:text-xl'>
                  {author}
                </span>
                <span className='text-gray-500 text-xs md:text-sm'>{date}</span>
              </div>
            </div>
            <div className='flex gap-5 ml-10 items-center text-xl cursor-pointer'>
              <FaTwitter />
              <FaFacebook />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
          <div className='mt-8'>
            <Image
              src={"https:" + url}
              width={width}
              height={height}
              // layout='responsive'
              id='blog-img'
              className='lg:w-[490px]'
              alt='banner-image'
            />
          </div>
        </div>

        <article className='prose md:prose-lg lg:prose-xl prose-sm'>
          {documentToReactComponents(content)}
        </article>
      </div>
    </div>
  );
}

export default Blog;
