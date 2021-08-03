/** @format */
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {/* <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} /> */}
        <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
          <HomeIcon className="h-8 mb-1 group-hover:animate-bounce" />
          <p className="opacity-0 group-hover:opacity-100 tracking-widest">
            HOME
          </p>
        </div>
        <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
          <LightningBoltIcon className="h-8 mb-1 group-hover:animate-bounce" />
          <p className="opacity-0 group-hover:opacity-100 tracking-widest">
            TRENDING
          </p>
        </div>

        <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
          <BadgeCheckIcon className="h-8 mb-1 group-hover:animate-bounce" />
          <p className="opacity-0 group-hover:opacity-100 tracking-widest">
            VERIFIED
          </p>
        </div>
        <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
          <CollectionIcon className="h-8 mb-1 group-hover:animate-bounce" />
          <p className="opacity-0 group-hover:opacity-100 tracking-widest">
            COLLECTIONS
          </p>
        </div>
        <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
          <SearchIcon className="h-8 mb-1 group-hover:animate-bounce" />
          <p className="opacity-0 group-hover:opacity-100 tracking-widest">
            SEARCH
          </p>
        </div>
        <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
          <UserIcon className="h-8 mb-1 group-hover:animate-bounce" />
          <p className="opacity-0 group-hover:opacity-100 tracking-widest">
            ACCOUNT
          </p>
        </div>
      </div>
      <Image
        className="object-contain"
        loading="eager"
        alt=""
        src="http://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
