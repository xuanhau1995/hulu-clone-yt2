/** @format */

import Image from "next/image";
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
        <p>
          {result.media_type && `${result.media_type}●`} {""}
          {result.release_date || result.first_air_date} ● {""}
        </p>
      </div>
    </div>
  );
}

export default Thumnail;
