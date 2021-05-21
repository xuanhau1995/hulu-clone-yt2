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
function Thumnail({ result }) {
  const BASED_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className='cursor-pointer'>
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
        <h2>{result.title || result.original_name}</h2>
        <p className="flex items-center">
          {result.media_type && `${result.media_type}`} {""}
          {result.release_date || result.first_air_date}{""}
          <ThumbUpIcon className="h-5"/>{result.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Thumnail;
