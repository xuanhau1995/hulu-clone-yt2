/** @format */

import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  ThumbUpIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumnail = forwardRef(({ result }, ref) => {
  const BASED_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      ref={ref}
      className='cursor-pointer group p-2 trasition duration-200 ease-in transform sm:hover:scale-105 hover;z-50'>
      <Image
        layout='responsive'
        width={1920}
        height={1080}
        src={
          `${BASED_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASED_URL}${result.poster_path}`
        }
      />
      <div className='p-4'>
        <p className='truncate max-w-md'>{result.overview}</p>
        <h2 className='mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold'>
          {result.title || result.original_name}
        </h2>
        <p className='flex items-center opacity-0 group-hover:opacity-100'>
          {/* {result.media_type && `${result.media_type} • `} {""} */}
          {result.release_date || result.first_air_date} • {""}
          <ThumbUpIcon className='h-5' />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumnail;
