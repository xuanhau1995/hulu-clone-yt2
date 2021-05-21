/** @format */
import requests from "../../../utils/requests";
import { useRouter } from "next/router";
function Nav() {
  //get router
  const router = useRouter();
  return (
    <nav className='relative'>
      <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-y-15 overflow-x-scroll scrollbar-hide'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h3
            onClick={() => router.push(`/?genre=${key}`)}
            key={key}
            className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 '>
            {title}
          </h3>
        ))}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
    </nav>
  );
}

export default Nav;
