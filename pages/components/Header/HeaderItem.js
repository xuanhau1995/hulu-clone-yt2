function HeaderItem({ Icon, title }) {
  if (!title) {
    title = {};
  }
  if (!Icon) {
    Icon = {};
  }
  return (
    <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
      {Icon && <Icon className="h-8 mb-1 group-hover:animate-bounce" />}
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
